import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {BOOLEAN} from "../utils/PrimitiveTypoContainer";
import {Reference} from "../utils/Reference";
import {PassPropsAndFuncs, SemanticException} from "../utils/Utils";
import {GraphvizNode} from "../utils/GraphvizNode";

export class IfNode extends Op{
    private readonly condition: Op;
    private readonly operationsTrue: Array<Op>;
    private readonly operationsFalse: Array<Op>;

    constructor(condition: Op, operationsTrue: Array<Op>, operationsFalse: Array<Op>) {
        super();
        this.condition = condition;
        this.operationsTrue = operationsTrue;
        this.operationsFalse = operationsFalse;
    }

    GO(env: Envmnt): object {
        let condition = this.condition.Exe(env);
        if (condition instanceof Reference) {
            condition = (condition as Reference).getValue();
        }
        if(!(condition instanceof BOOLEAN)){
            throw new SemanticException("Condicion utilizada como parametro no soportada por sentencia If");
        }

        if (condition.getValue()) {
            const envTrue = new Envmnt(env, this.operationsTrue);
            PassPropsAndFuncs(env, envTrue);
            return envTrue.GO_ALL();
        }

        const envFalse = new Envmnt(env, this.operationsFalse);
        PassPropsAndFuncs(env, envFalse);
        return envFalse.GO_ALL();
    }

    GetGraph(env: Envmnt): GraphvizNode {
        return new GraphvizNode('IF', [
            this.condition.GetGraph(env),
            new GraphvizNode('IF_BODY_TRUE', this.operationsTrue.map(sentence => sentence.GetGraph(env))),
            new GraphvizNode('IF_BODY_FALSE', this.operationsFalse.map(sentence => sentence.GetGraph(env)))
        ]);
    }
}
import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {BOOLEAN} from "../utils/PrimitiveTypoContainer";
import {Reference} from "../utils/Reference";
import {SemanticException} from "../utils/Utils";

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
            return envTrue.GO_ALL();
        }

        const envFalse = new Envmnt(env, this.operationsFalse);
        return envFalse.GO_ALL();
    }
}
import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {LogicWhile} from "../utils/Utils";

export class ForNode extends Op {
    private readonly condition0: Op;
    private readonly condition1: Op;
    private readonly condition2: Op;

    private readonly sentences: Array<Op>;

    constructor(condition0: Op, condition1: Op, condition2: Op, sentences: Array<Op>) {
        super();
        this.condition0 = condition0;
        this.condition1 = condition1;
        this.condition2 = condition2;
        this.sentences = sentences;
    }

    GO(env: Envmnt): object {
        const conditionEnv = new Envmnt(env, [this.condition0]);
        conditionEnv.GO_ALL();

        LogicWhile(conditionEnv, this.condition1, this.sentences, this.condition2);
        return undefined;
    }
}
import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {LogicWhile} from "../utils/Utils";

export class DoWhileNode extends Op {
    private readonly condition: Op;
    private readonly sentences: Array<Op>;

    constructor(condition: Op, sentences: Array<Op>) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }

    GO(env: Envmnt): object {
        return LogicWhile(env, this.condition, this.sentences, null);
    }
}
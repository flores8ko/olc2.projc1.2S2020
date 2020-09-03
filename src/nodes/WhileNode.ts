import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";

export class WhileNode extends Op {
    private readonly condition: Op;
    private readonly sentences: Array<Op>;

    constructor(condition: Op, sentences: Array<Op>) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }

    GO(env: Envmnt): object {
        return undefined;
    }
}

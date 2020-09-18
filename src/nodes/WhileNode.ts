import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {LogicWhile} from "../utils/Utils";
import {GraphvizNode} from "../utils/GraphvizNode";

export class WhileNode extends Op {
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

    GetGraph(env: Envmnt): GraphvizNode {
        return new GraphvizNode('WHILE', [this.condition.GetGraph(env), new GraphvizNode('WHILE_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))]);
    }
}

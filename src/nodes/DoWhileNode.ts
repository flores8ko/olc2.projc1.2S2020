import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {LogicDoWhile} from "../utils/Utils";
import {GraphvizNode} from "../utils/GraphvizNode";

export class DoWhileNode extends Op {
    private readonly condition: Op;
    private readonly sentences: Array<Op>;

    constructor(condition: Op, sentences: Array<Op>) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }

    GO(env: Envmnt): object {
        return LogicDoWhile(env, this.condition, this.sentences, null);
    }

    GetGraph(env: Envmnt): GraphvizNode {
        return new GraphvizNode('DO_WHILE', [new GraphvizNode('WHILE_BODY', this.sentences.map(sentence => sentence.GetGraph(env))), this.condition.GetGraph(env)]);
    }
}
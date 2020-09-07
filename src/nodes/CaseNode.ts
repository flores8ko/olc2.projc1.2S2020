import {Op} from "../utils/Op";

export class CaseNode {
    private readonly conditionValue: Op;
    private readonly sentences: Array<Op>;

    constructor(conditionValue: Op, sentences: Array<Op>) {
        this.conditionValue = conditionValue;
        this.sentences = sentences;
    }

    public getConditionValue(): Op {
        return this.conditionValue;
    }

    public getSentences(): Array<Op> {
        return this.sentences;
    }
}
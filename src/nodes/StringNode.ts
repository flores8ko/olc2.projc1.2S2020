import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {STRING} from "../utils/PrimitiveTypoContainer";
import {GraphvizNode} from "../utils/GraphvizNode";

export class StringNode extends Op{
    private readonly val: string;

    constructor(val: string) {
        super();
        this.val = val.replace(/\\n/g, "&#13;&#10;       ").replace(/\\t/g, "&#9;");
        console.log(this.val);
    }

    GO(env: Envmnt) {
        return new STRING(this.val.substring(1, this.val.length - 1));
    }

    GetGraph(env: Envmnt): GraphvizNode {
        return new GraphvizNode('STRING', [new GraphvizNode(this.val.substring(1, this.val.length - 1))]);
    }

    GetTSGraph(): string {
        return "";
    }

}

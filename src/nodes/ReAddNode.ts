import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Add} from "../utils/AlgebraicOperationsFunctions";
import {Cntnr} from "../utils/Cntnr";
import {GraphvizNode} from "../utils/GraphvizNode";

export class ReAddNode extends Op {
    private readonly lf: Op;

    constructor(lf: Op) {
        super();
        this.lf = lf;
    }

    GO(env: Envmnt): object {
        return Add(this.lf.Exe(env) as Cntnr);
    }

    GetGraph(env: Envmnt): GraphvizNode {
        return new GraphvizNode('RE_ADD', [this.lf.GetGraph(env)]);
    }
}

import {Op} from "../utils/Op";
import {Diferente} from "../utils/RelationalOperationsFunctions";
import {Cntnr} from "../utils/Cntnr";
import {Envmnt} from "../utils/Envmnt";

export class DifNode extends Op {
    private readonly lf: Op;
    private readonly rt: Op;

    constructor(lf: Op, rt: Op) {
        super();
        this.lf = lf;
        this.rt = rt;
    }

    GO(env: Envmnt): object {
        return Diferente((this.lf.Exe(env) as Cntnr), (this.rt.Exe(env) as Cntnr));
    }
}

import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Potencia} from "../utils/AlgebraicOperationsFunctions";
import {Cntnr} from "../utils/Cntnr";

export class ExpNode extends Op {
    private readonly lf: Op;
    private readonly rt: Op;

    constructor(lf: Op, rt: Op) {
        super();
        this.lf = lf;
        this.rt = rt;
    }

    GO(env: Envmnt): object {
        return Potencia((this.lf.Exe(env) as Cntnr), (this.rt.Exe(env) as Cntnr));
    }
}

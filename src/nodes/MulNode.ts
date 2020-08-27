import {Op} from "../utils/Op";
import {Multiplicacion} from "../utils/AlgebraicOperationsFunctions";
import {Cntnr} from "../utils/Cntnr";
import {Envmnt} from "../utils/Envmnt";

export class MulNode extends Op{
    private readonly lf: Op;
    private readonly rt: Op;

    constructor(lf: Op, rt: Op) {
        super();
        this.lf = lf;
        this.rt = rt;
    }

    GO(env: Envmnt): object {
        return Multiplicacion(this.lf.Exe(env) as Cntnr, this.rt.Exe(env) as Cntnr);
    }

}
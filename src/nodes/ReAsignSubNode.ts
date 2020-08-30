import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Reference} from "../utils/Reference";
import {SemanticException} from "../utils/Utils";
import {Resta} from "../utils/AlgebraicOperationsFunctions";
import {Cntnr} from "../utils/Cntnr";

export class ReAsignSubNode extends Op {
    private readonly lf: Op;
    private readonly rt: Op;

    constructor(lf: Op, rt: Op) {
        super();
        this.lf = lf;
        this.rt = rt;
    }

    GO(env: Envmnt): object {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);

        if (!(lf instanceof Reference)) {
            throw new SemanticException(`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }

        (lf as Reference).PutValueOnReference(
            Resta((lf as Reference).getValue(), rt as Cntnr)
        );
        return (lf as Reference).getValue();
    }
}

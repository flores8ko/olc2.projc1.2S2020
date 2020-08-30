import {Cntnr, Envmnt, Op, Reference} from "../index";
import {SemanticException} from "../utils/Utils";
import {Suma} from "../utils/AlgebraicOperationsFunctions";

export class ReAsignAddNode extends Op {
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
            Suma((lf as Reference).getValue(), rt as Cntnr)
        );
        return (lf as Reference).getValue();
    }
}

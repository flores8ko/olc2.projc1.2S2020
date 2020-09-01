import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Cntnr} from "../utils/Cntnr";
import {Reference} from "../utils/Reference";
import {SemanticException} from "../utils/Utils";
import {Native} from "../utils/functions/Native";
import {FunctionRepresent} from "../utils/functions/FunctionRepresent";
import {ReturnObj} from "./ReturnObj";

export class CreateObjVarNode extends Op{
    private readonly id: Op;
    private readonly attr: string;

    constructor(id: Op, attr: string) {
        super();
        this.id = id;
        this.attr = attr;
    }

    GO(env: Envmnt): object {
        let id = this.id.Exe(env) as Cntnr;
        if (!(id instanceof Reference)) {
            throw new SemanticException("Llamada a Objeto no definido");
        }

        let ref = (id as Reference).getValue();
        let e = ref.GetProperty(this.attr);
        if (e instanceof FunctionRepresent) {
            let ans = e.EXE(env, new Array<Cntnr>());
            if (ans instanceof ReturnObj) {
                return (ans as ReturnObj).getValue();
            }
        }

        return ref.GetProperty(this.attr);
    }
}
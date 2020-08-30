import { Op } from "../utils/Op";
import {Cntnr} from '../utils/Cntnr';
import {Envmnt} from "../utils/Envmnt";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";
import {Reference} from "../utils/Reference";

export class DeclareVarNode extends Op{
    private readonly name: string;
    private value: Cntnr = new UNDEFINED();
    private isConst:boolean;
    private tipoNombre: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    GO(env: Envmnt) : object {
        this.AddVarOnDeclare(env, this.name);
        return null;
    }

    public AddValue(value: Cntnr, isConst: boolean = false, tipoNombre: string = 'ANY'){
        this.value = value;
        this.isConst = isConst;
        if(tipoNombre === ''){
            tipoNombre = 'ANY';
        }
        this.tipoNombre = tipoNombre.toUpperCase();
    }

    private AddVarOnDeclare(env: Envmnt, identifier: string): void {
        const value: Cntnr = this.value;
        const reference: Reference = new Reference(this.tipoNombre, this.isConst);
        reference.PutValueOnReference(value);
        env.Declare(identifier, reference);
    }
}

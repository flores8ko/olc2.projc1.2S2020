import { Op } from "../utils/Op";
import {Cntnr} from '../utils/Cntnr';
import {Envmnt} from "../utils/Envmnt";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";
import {Reference} from "../utils/Reference";

export class DeclareVarNode extends Op{
    private readonly name: string;
    private value: Cntnr = new UNDEFINED();

    constructor(name: string) {
        super();
        this.name = name;
    }

    GO(env: Envmnt) : object {
        this.AddVarOnDeclare(env, this.name);
        return null;
    }

    public AddValue(value: Cntnr){
        this.value = value;
    }

    private AddVarOnDeclare(env: Envmnt, identifier: string): void {
        const value: Cntnr = this.value;
        const reference: Reference = new Reference();
        reference.PutValueOnReference(value);
        env.Declare(identifier, reference);
    }
}

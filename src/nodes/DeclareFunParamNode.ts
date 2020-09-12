import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";
import {Reference} from "../utils/Reference";

export class DeclareFunParamNode extends Op{
    private readonly name: string;
    private readonly type: string;

    constructor(name: string, type = 'ANY') {
        super();
        this.name = name;
        this.type = type.toUpperCase();
    }

    GO(env: Envmnt): object {
        const value = new UNDEFINED();
        const reference = new Reference(this.type);
        reference.PutValueOnReference(value);
        env.Declare(this.name, reference);
        return reference;
    }
}
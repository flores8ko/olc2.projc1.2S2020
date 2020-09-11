import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";
import {Reference} from "../utils/Reference";

export class DeclareFunParamNode extends Op{
    private readonly name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    GO(env: Envmnt): object {
        const value = new UNDEFINED();
        const reference = new Reference();
        reference.PutValueOnReference(value);
        env.Declare(this.name, reference);
        return reference;
    }
}
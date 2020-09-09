import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Cntnr} from "../utils/Cntnr";
import {Reference} from "../utils/Reference";

export class CreateObjNode extends Op {
    private readonly attrs: Map<string, Op>;

    constructor(attrs: Map<string, Op>) {
        super();
        this.attrs = attrs;
    }

    GO(env: Envmnt): object {
        const real: Map<string, Cntnr> = new Map<string, Cntnr>();
        this.attrs.forEach((v, k) => {
            let value = v.Exe(env);
            if (value instanceof Reference) {
                value = (value as Reference).getValue();
            }
            const reference = new Reference();
            reference.PutValueOnReference(value as Cntnr);
            real.set(k, reference);
        });
        return undefined;
    }

}
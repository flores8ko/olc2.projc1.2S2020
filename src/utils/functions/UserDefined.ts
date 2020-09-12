import {FunctionRepresent} from "./FunctionRepresent";
import {Op} from "../Op";
import {Envmnt} from "../Envmnt";
import {Cntnr} from "../Cntnr";
import {Reference} from "../Reference";

export class UserDefined extends FunctionRepresent {
    private readonly src: Array<Op>;
    private readonly params: Array<Op>;

    constructor(src: Array<Op>, params: Array<Op>) {
        super();
        this.src = src;
        this.params = params;
    }

    public getSrc(): Array<Op> {
        return this.src;
    }

    EXE(env0: Envmnt, args: Array<Cntnr>): Cntnr {
        let env = new Envmnt(env0, this.src);
        const references: Array<Reference> = new Array<Reference>();
        for (let param of this.params) {
            references.push(param.Exe(env) as Reference);
        }
        for (let i = 0; i < args.length && i < references.length; i++) {
            references[i].PutValueOnReference(args[i]);
        }
        return env.GO_ALL();
    }
}
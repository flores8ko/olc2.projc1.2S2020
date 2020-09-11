import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {UserDefined} from "../utils/functions/UserDefined";
import {Reference} from "../utils/Reference";

export class DeclareFunNode extends Op{
    private readonly name: string;
    private readonly params: Array<Op>;
    private readonly sentences: Array<Op>;

    constructor(name: string, params: Array<Op>, sentences: Array<Op>) {
        super();
        this.name = name;
        this.params = params;
        this.sentences = sentences;
    }

    GO(env: Envmnt): object {
        const value = new UserDefined(this.sentences, this.params);
        const reference = new Reference();
        reference.PutValueOnReference(value);
        if(this.name !== null) {
            env.Declare(this.name, reference);
            return undefined;
        }
        return value;
    }
}
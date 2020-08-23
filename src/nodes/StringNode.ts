import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {STRING} from "../utils/PrimitiveTypoContainer";

export class StringNode extends Op{
    private readonly val: string;

    constructor(val: string) {
        super();
        this.val = val;
    }

    GO(env: Envmnt) {
        return new STRING(this.val);
    }
}

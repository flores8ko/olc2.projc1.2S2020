import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {BOOLEAN} from "../utils/PrimitiveTypoContainer";

export class BooleanNode extends Op{
    private readonly val: boolean;

    constructor(val: boolean) {
        super();
        this.val = val;
    }

    GO(env: Envmnt) {
        return new BOOLEAN(this.val);
    }
}

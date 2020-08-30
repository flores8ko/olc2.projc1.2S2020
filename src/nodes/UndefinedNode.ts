import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";

export class UndefinedNode extends Op{
    constructor() {
        super();
    }

    GO(env: Envmnt) {
        return new UNDEFINED();
    }
}

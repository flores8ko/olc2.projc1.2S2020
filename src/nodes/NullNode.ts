import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {NULL} from "../utils/PrimitiveTypoContainer";

export class NullNode extends Op{
    constructor() {
        super();
    }

    GO(env: Envmnt) {
        return new NULL();
    }
}

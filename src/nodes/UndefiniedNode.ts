import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {UNDEFINIED} from "../utils/PrimitiveTypoContainer";

export class UndefiniedNode extends Op{
    constructor() {
        super();
    }

    GO(env: Envmnt) {
        return new UNDEFINIED();
    }
}

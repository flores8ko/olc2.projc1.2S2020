import {Native} from "../functions/Native";
import {ARRAY, NUMBER} from "../PrimitiveTypoContainer";
import {Envmnt} from "../Envmnt";
import {Cntnr} from "../Cntnr";
import {ReturnObj} from "../../nodes/ReturnObj";

export class Push extends Native{
    private readonly array: ARRAY;

    constructor(array: ARRAY) {
        super();
        this.array = array;
    }

    EXE(env0: Envmnt, args: Array<Cntnr>): Cntnr {
        let val = this.array.getValueList().push(args[0]);
        let size = this.array.getValueList().length;
        return new ReturnObj(new NUMBER(size));
    }
}
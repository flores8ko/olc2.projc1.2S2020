import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {ReturnObj} from "./ReturnObj";
import {Cntnr} from "../utils/Cntnr";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";

export class ReturnNode extends Op{
    private readonly value: Op;

    constructor(value: Op) {
        super();
        this.value = value;
    }

    GO(env: Envmnt): object {
        if(this.value !== null) {
            const value = this.value.Exe(env);
            return new ReturnObj(value as Cntnr);
        }
        return new ReturnObj(new UNDEFINED());
    }
}
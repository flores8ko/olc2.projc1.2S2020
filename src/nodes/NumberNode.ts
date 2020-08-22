import {Envmnt} from "../utils/Envmnt";
import {NUMBER} from "../utils/PrimitiveTypoContainer";
import {Op} from "../utils/Op";

export class NumberNode extends Op{
    private readonly val: number;

    constructor(val: number) {
        super();
        this.val = val;
    }

    GO(env: Envmnt){
        return new NUMBER(this.val);
    }
}
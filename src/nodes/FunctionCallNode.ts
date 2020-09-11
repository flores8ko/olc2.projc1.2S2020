import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Cntnr} from "../utils/Cntnr";
import {Reference} from "../utils/Reference";
import {FunctionRepresent} from "../utils/functions/FunctionRepresent";
import {ReturnObj} from "./ReturnObj";
import {UNDEFINED} from "../utils/PrimitiveTypoContainer";

export class FunctionCallNode extends Op{
    private readonly name: Op;
    private readonly args: Array<Op>;

    constructor(name: Op, args: Array<Op>) {
        super();
        this.name = name;
        this.args = args;
    }

    GO(env: Envmnt): object {
        let id = this.name.Exe(env);
        if (id instanceof Reference) {
            id = (id as Reference).getValue();
        }

        const argsValues = new Array<Cntnr>();
        for (let arg of this.args) {
            let ans = arg.Exe(env);
            if (ans instanceof Reference) {
                ans = (ans as Reference).getValue();
            }
            argsValues.push(ans as Cntnr);
        }

        if (id instanceof FunctionRepresent) {
            let ans = (id as FunctionRepresent).EXE(env, argsValues);
            if (ans instanceof ReturnObj) {
                return (ans as ReturnObj).getValue();
            }
        }
        return new UNDEFINED();
    }
}
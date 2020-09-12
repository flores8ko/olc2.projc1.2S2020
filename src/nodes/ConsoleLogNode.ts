import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Reference} from "../utils/Reference";
import {Console} from "../utils/Console";

export class ConsoleLogNode extends Op{
    private expression: Op;

    constructor(expression: Op) {
        super();
        this.expression = expression;
    }

    GO(env: Envmnt) : object {
        let val = this.expression.Exe(env);
        if (val instanceof Reference) {
            val = (val as Reference).getValue();
        }

        Console.log += `[LOG]: ${val} \n`;
        console.log(`[LOG]: ${val}`);
        return null;
    };
}
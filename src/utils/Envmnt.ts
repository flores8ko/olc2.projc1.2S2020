import {Cntnr} from "./Cntnr";
import {Op} from "./Op";
import {BreakObj} from "../nodes/BreakObj";
import {ReturnObj} from "../nodes/ReturnObj";
import {ContinueObj} from "../nodes/ContinueObj";

export class Envmnt extends Cntnr{
    public readonly Extra = new Map<string, any>();
    private readonly operations: Array<Op>;

    constructor(owner: Cntnr, operations: Array<Op>){
        super(owner);
        this.operations = operations;
        this.typo = "Ambito";
    }

    public GO_ALL(): Cntnr{
        for(let op of this.operations){
            try{
                let result = op.Exe(this);
                   if(result instanceof BreakObj || result instanceof ReturnObj || result instanceof ContinueObj){
                        return result as Cntnr;
                   }
            }catch (e) {
                console.log(e.message)
            }
        }
        return null;
    }
}
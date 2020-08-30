import {Cntnr} from "./Cntnr";
import {Op} from "./Op";

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
                //TODO añadir validacion de Break y Return
                /*
                   if(result instanceof BreakObj || result instanceof ReturnObj){
                        return (Cntnr) result;
                   }
                */
            }catch (e) {
                console.log(e.message)
            }
        }
        return null;
    }
}
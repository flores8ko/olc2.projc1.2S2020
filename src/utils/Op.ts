import {Envmnt} from "./Envmnt";
import {ErrorCompo} from "./Utils";

export abstract class Op {
    public Exe(env: Envmnt): object{
        try{
            return this.GO(env);
        }catch (e) {
            throw new ErrorCompo(e.message);
        }
    }

    public abstract GO(env: Envmnt): object;
}
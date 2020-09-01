import {Cntnr, Envmnt} from "../../index";

export abstract class FunctionRepresent extends Cntnr{
    public abstract EXE(env0: Envmnt, args: Array<Cntnr>): Cntnr;
}
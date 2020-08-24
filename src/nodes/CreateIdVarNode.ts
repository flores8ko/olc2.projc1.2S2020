import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {FindVar} from "../utils/Utils";

export class CreateIdVarNode extends Op{
    private readonly id: string;

    constructor(id: string) {
        super();
        this.id = id;
    }

    GO(env: Envmnt) : object{
        return FindVar(env, this.id);
    }
}

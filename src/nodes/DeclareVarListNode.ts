import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {DeclareVarNode} from "./DeclareVarNode";
import {Cntnr} from "../utils/Cntnr";

export class DeclareVarListNode extends Op {
    private readonly id: string;
    private readonly value: Op;
    private readonly declarationOps: Array<Op>;

    constructor(id: string, declarationOps: Array<Op>, value?: Op) {
        super();
        this.id = id;
        this.declarationOps = declarationOps;
        this.value = value || null;
    }

    GO(env: Envmnt): object {
        for (let op of this.declarationOps) {
            try {
                if (this.value !== null) {
                    (op as DeclareVarNode).AddValue(this.value.Exe(env) as Cntnr);
                }
                op.Exe(env);
            } catch (e) {
                console.log(e.message);
            }
        }
        console.log(env);
        return null;
    }
}

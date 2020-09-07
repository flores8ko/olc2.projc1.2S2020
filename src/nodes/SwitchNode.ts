import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Igual} from "../utils/RelationalOperationsFunctions";
import {Cntnr} from "../utils/Cntnr";
import {BOOLEAN} from "../utils/PrimitiveTypoContainer";
import {BreakNode} from "./BreakNode";
import {BreakObj} from "./BreakObj";
import {ReturnObj} from "./ReturnObj";
import {ContinueObj} from "./ContinueObj";
import {CaseNode} from "./CaseNode";

export class SwitchNode extends Op {
    private readonly condition: Op;
    private readonly cases: Array<CaseNode>;

    constructor(condition: Op, cases: Array<CaseNode>) {
        super();
        this.condition = condition;
        this.cases = cases;
    }

    GO(env: Envmnt): object {
        let condition = this.condition.Exe(env);
        let ret: Cntnr = undefined;
        let hasEnter = false;
        for (let Case of this.cases) {
            if (ret instanceof BreakObj) {
                break;
            }
            if (ret instanceof ReturnObj) {
                return ret;
            }
            if (ret instanceof ContinueObj) {
                continue;
            }
            let caseValue = Case.getConditionValue().Exe(env);
            if (!(Igual(condition as Cntnr, caseValue as Cntnr) as BOOLEAN).getValue() && !hasEnter) {
                continue;
            }

            const env0 = new Envmnt(env, Case.getSentences());
            ret = env0.GO_ALL();
            hasEnter = true;
        }
        return undefined;
    }
}
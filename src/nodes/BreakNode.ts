import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {BreakObj} from "./BreakObj";

export  class BreakNode extends Op{
    GO(env: Envmnt): object {
        return new BreakObj();
    }
}
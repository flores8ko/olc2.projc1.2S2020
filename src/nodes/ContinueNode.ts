import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {ContinueObj} from "./ContinueObj";

export class ContinueNode extends Op{
    GO(env: Envmnt): object {
        return new ContinueObj();
    }
}
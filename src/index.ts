import {Reference} from "./utils/Reference";
import {UNDEFINIED, NULL} from "./utils/PrimitiveTypoContainer";
import {Envmnt} from "./utils/Envmnt";
import {Cntnr} from "./utils/Cntnr";
import {Op} from "./utils/Op";

export {
    Cntnr,
    Envmnt,
    Op,
    NULL,
    UNDEFINIED,
    Reference,
}

export function ExecuteAST(sentences: Array<Op>) {
    const env = new Envmnt(null, sentences);
    env.GO_ALL();
}
if(module && module.hot) module.hot.accept();

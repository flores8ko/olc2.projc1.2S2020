import {Reference} from "./utils/Reference";
import {UNDEFINIED, NULL} from "./utils/PrimitiveTypoContainer";
import {Envmnt} from "./utils/Envmnt";
import {Cntnr} from "./utils/Cntnr";
import {Op} from "./utils/Op";
import {Console} from "./utils/Console";

import {ConsoleLogNode} from "./nodes/ConsoleLogNode";
import {NumberNode} from "./nodes/NumberNode";
import {StringNode} from "./nodes/StringNode";
import { BooleanNode } from "./nodes/BooleanNode";

export {
    Console,
    Cntnr,
    Envmnt,
    Op,
    NULL,
    UNDEFINIED,
    Reference,

    ConsoleLogNode,
    NumberNode,
    StringNode,
    BooleanNode,
}

export function ExecuteAST(sentences: Array<Op>) {
    Console.log = '';
    const env = new Envmnt(null, sentences);
    env.GO_ALL();
}

if (module && module.hot) module.hot.accept();

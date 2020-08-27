import {Reference} from "./utils/Reference";
import {UNDEFINED, NULL} from "./utils/PrimitiveTypoContainer";
import {Envmnt} from "./utils/Envmnt";
import {Cntnr} from "./utils/Cntnr";
import {Op} from "./utils/Op";
import {Console} from "./utils/Console";

import {ConsoleLogNode} from "./nodes/ConsoleLogNode";
import {NumberNode} from "./nodes/NumberNode";
import {StringNode} from "./nodes/StringNode";
import { BooleanNode } from "./nodes/BooleanNode";
import { NullNode } from "./nodes/NullNode";
import { UndefinedNode } from "./nodes/UndefinedNode";
import { DeclareVarNode } from "./nodes/DeclareVarNode";
import { DeclareVarListNode } from "./nodes/DeclareVarListNode";
import { CreateIdVarNode } from "./nodes/CreateIdVarNode";
import { AsignNode } from "./nodes/AsignNode";
import { SumNode } from "./nodes/SumNode";
import { SubNode } from "./nodes/SubNode";
import { MulNode } from "./nodes/MulNode";
import { DivNode } from "./nodes/DivNode";
import { ModNode } from "./nodes/ModNode";
import { ExpNode } from "./nodes/ExpNode";
import { EqNode } from "./nodes/EqNode";

export {
    Console,
    Cntnr,
    Envmnt,
    Op,
    NULL,
    UNDEFINED,
    Reference,

    ConsoleLogNode,
    NumberNode,
    StringNode,
    BooleanNode,
    NullNode,
    UndefinedNode,

    DeclareVarNode,
    DeclareVarListNode,

    CreateIdVarNode,

    AsignNode,

    SumNode,
    SubNode,
    MulNode,
    DivNode,
    ModNode,
    ExpNode,

    EqNode,
}

export function ExecuteAST(sentences: Array<Op>) {
    Console.log = '';
    const env = new Envmnt(null, sentences);
    env.GO_ALL();
}

if (module && module.hot) module.hot.accept();

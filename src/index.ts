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
import { DifNode } from "./nodes/DifNode";
import { HigherNode } from "./nodes/HigherNode";
import { MinorNode } from "./nodes/MinorNode";
import { HigherEqNode } from "./nodes/HigherEqNode";
import { MinorEqNode } from "./nodes/MinorEqNode";
import { OrNode } from "./nodes/OrNode";
import { AndNode } from "./nodes/AndNode";
import { NotNode } from "./nodes/NotNode";
import { ReAsignAddNode } from "./nodes/ReAsignAddNode";
import { ReAsignSubNode } from "./nodes/ReAsignSubNode";
import { ReAsignMulNode } from "./nodes/ReAsignMulNode";
import { ReAsignDivNode } from "./nodes/ReAsignDivNode";
import { ReAsignModNode } from "./nodes/ReAsignModNode";
import { ReAddNode } from "./nodes/ReAddNode";
import { ReSubNode } from "./nodes/ReSubNode";
import { CreateArrayNode } from "./nodes/CreateArrayNode";
import { CreateArrVarNode } from "./nodes/CreateArrVarNode";

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
    DifNode,
    HigherNode,
    MinorNode,
    HigherEqNode,
    MinorEqNode,

    OrNode,
    AndNode,
    NotNode,

    ReAsignAddNode,
    ReAsignSubNode,
    ReAsignMulNode,
    ReAsignDivNode,
    ReAsignModNode,

    ReAddNode,
    ReSubNode,

    CreateArrayNode,
    CreateArrVarNode,
}

export function ExecuteAST(sentences: Array<Op>) {
    Console.log = '';
    const env = new Envmnt(null, sentences);
    env.GO_ALL();
}

if (module && module.hot) module.hot.accept();

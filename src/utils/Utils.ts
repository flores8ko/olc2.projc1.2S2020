import {BOOLEAN, NULL, UNDEFINED} from "./PrimitiveTypoContainer";
import {Cntnr} from "./Cntnr";
import {Envmnt} from "./Envmnt";
import {Op} from "./Op";
import {Reference} from "./Reference";
import {BreakObj} from "../nodes/BreakObj";
import {ReturnObj} from "../nodes/ReturnObj";
import {ContinueObj} from "../nodes/ContinueObj";

export class SemanticException extends Error {
    constructor(message?: string) {
        super(message);
    }
}

export class ErrorCompo extends Error {
    constructor(message?: string) {
        super(message);
    }
}

export function DefaultValue(typo: string): Cntnr {
    switch (typo.toUpperCase()) {
        case "NULL":
            return new NULL();
        default:
            return new UNDEFINED();
    }
}

export function FindVar(cont: Cntnr, identifier: string): Cntnr {
    let ownerCntnr = cont;

    while (ownerCntnr != null){
        if(ownerCntnr.GetProperty(identifier) !== undefined){
            return ownerCntnr.GetProperty(identifier);
        }
        ownerCntnr = ownerCntnr.GetOwner();
    }

    throw  new SemanticException(`identificador ${identifier} no encontrado`);
}

export function PassPropsAndFuncs(father: Envmnt, son: Envmnt) {
    // father.props.forEach((v, k) => {
    //     son.Declare(k, v);
    // });
}

export function LogicWhile(env: Envmnt, condition: Op, sentences: Array<Op>, extra: Op) {
    let ans = condition.Exe(env);
    if (ans instanceof Reference) {
        ans = (ans as Reference).getValue();
    }

    if (!(ans instanceof BOOLEAN)) {
        throw new SemanticException("Condicion utilizada en ciclo while no soportada");
    }

    let tmp = ans as BOOLEAN;
    while (tmp.getValue()) {
        const env0 = new Envmnt(env, sentences);
        PassPropsAndFuncs(env, env0);
        const ret = env0.GO_ALL();

        if (ret instanceof BreakObj) {
            break;
        }
        if (ret instanceof ReturnObj) {
            return ret;
        }
        if(ret instanceof ContinueObj){
            continue;
        }

        if (extra !== null) {
            extra.Exe(env);
        }

        let ans0 = condition.Exe(env);
        if (ans0 instanceof Reference) {
            ans0 = (ans0 as Reference).getValue();
        }
        tmp = ans0 as BOOLEAN;
    }
    return null;
}

export function LogicDoWhile(env: Envmnt, condition: Op, sentences: Array<Op>, extra: Op) {
    let ans = condition.Exe(env);
    if (ans instanceof Reference) {
        ans = (ans as Reference).getValue();
    }

    if (!(ans instanceof BOOLEAN)) {
        throw new SemanticException("Condicion utilizada en ciclo while no soportada");
    }

    let env0 = new Envmnt(env, sentences);
    PassPropsAndFuncs(env, env0);
    env0.GO_ALL();

    let ans0 = condition.Exe(env);
    if (ans0 instanceof Reference) {
        ans0 = (ans0 as Reference).getValue();
    }
    let tmp = ans0 as BOOLEAN;

    while (tmp.getValue()) {
        const env0 = new Envmnt(env, sentences);
        PassPropsAndFuncs(env, env0);
        const ret = env0.GO_ALL();

        if (ret instanceof BreakObj) {
            break;
        }
        if (ret instanceof ReturnObj) {
            return ret;
        }
        if(ret instanceof ContinueObj){
            continue;
        }

        if (extra !== null) {
            extra.Exe(env);
        }

        let ans0 = condition.Exe(env);
        if (ans0 instanceof Reference) {
            ans0 = (ans0 as Reference).getValue();
        }
        tmp = ans0 as BOOLEAN;
    }
    return null;
}

export class MyMap {
    private readonly map: Map<any, any>;

    constructor() {
        this.map = new Map<any, any>();
    }

    getMap() {
        return this.map;
    }

    addEntry(key: any, value: any) {
        this.map.set(key, value);
    }
}
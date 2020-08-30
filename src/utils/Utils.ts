import {NULL, UNDEFINED} from "./PrimitiveTypoContainer";
import {Cntnr} from "./Cntnr";
import {Envmnt} from "./Envmnt";

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
        if(ownerCntnr.GetProperty(identifier) !== null){
            return ownerCntnr.GetProperty(identifier);
        }
        ownerCntnr = ownerCntnr.GetOwner();
    }

    throw  new SemanticException(`identificador ${identifier} no encontrado`);
}

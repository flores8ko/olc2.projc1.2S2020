import {NULL, UNDEFINED} from "./PrimitiveTypoContainer";
import {Cntnr} from "./Cntnr";

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

export function DefaultValue(typo: string) : Cntnr {
    switch (typo.toUpperCase()) {
        case "NULL":
            return new NULL();
        default:
            return new UNDEFINED();
    }
}

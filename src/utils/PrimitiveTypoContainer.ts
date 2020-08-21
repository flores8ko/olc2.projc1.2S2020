import {Cntnr} from "./Cntnr";

export class UNDEFINIED extends Cntnr{
    constructor() {
        super();
        this.typo = "UNDEFINIED";
    }

    public toString = (): string => {
        return "undefinied";
    };
}

export class NULL extends Cntnr{
    constructor() {
        super();
        this.typo = "NULL";
    }

    public toString = (): string => {
        return null;
    };

    public getValue = (): object => {
        return null;
    };
}
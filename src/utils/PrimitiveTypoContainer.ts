import {Cntnr} from "./Cntnr";

export class NUMBER extends Cntnr {
    private readonly value: number;

    constructor(value?: number) {
        super();
        this.value = value || 0;
        this.typo = "NUMBER";
    }

    public toString = (): string => {
        return this.value + '';
    };

    public getValue = (): number => {
        return this.value;
    };
}

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
import {Cntnr} from "./Cntnr";

export class BOOLEAN extends Cntnr {
    private readonly value: boolean;

    constructor(value?: boolean) {
        super();
        this.value = value;
        this.typo = "BOOLEAN";
    }

    public toString = (): string => {
        return this.value ? "true" : "false";
    };

    public getValue = (): boolean => {
        return this.value;
    };
}

export class STRING extends Cntnr{
    private readonly value: string;

    constructor(value?: string) {
        super();
        this.value = value || '';
        this.typo = "STRING";
    }

    public toString = (): string => {
        return this.value;
    };

    public getValue = (): string => {
        return this.value;
    };
}

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

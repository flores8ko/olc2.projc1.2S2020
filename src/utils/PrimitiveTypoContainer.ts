import {Cntnr} from "./Cntnr";
import {Reference} from "./Reference";

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

    public getValueNumber = (): number => {
        return this.value ? 1 : 0;
    }

    public getValue = (): boolean => {
        return this.value;
    };
}

export class STRING extends Cntnr {
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

export class UNDEFINED extends Cntnr {
    constructor() {
        super();
        this.typo = "UNDEFINED";
    }

    public toString = (): string => {
        return "undefined";
    };
}

export class NAN extends Cntnr {
    constructor() {
        super();
        this.typo = "NAN";
    }

    public toString = (): string => {
        return "NaN";
    }
}

export class NULL extends Cntnr {
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

export class ARRAY extends Cntnr {
    private readonly value: Array<Cntnr>;
    private readonly contentType: string;

    constructor(value?: Array<Cntnr>, contentType: string = 'ANY') {
        super();
        this.value = value || new Array<Cntnr>();
        this.typo = `ARRAY`;
        this.contentType = contentType;
    }

    public toString = (): string => {
        const size = this.value.length;
        let log = `Array (${size}) [`;
        for (let i = 0; i < size; i++) {
            log += `${(this.value[i] as Reference).getValue()}`;
            if (size - 1 !== i) {
                log += ', ';
            }
        }
        log += ']';
        return log;
    };

    public getValue = (index: number): object => {
        let val = this.value[index];
        if (val !== undefined) {
            return val;
        }
        let size = this.value.length;
        while (size <= index) {
            this.value.push(new Reference());
            size++;
        }
        return this.value[index];
    };

    public getValueList = (): Array<Cntnr> => {
        return this.value;
    };
}

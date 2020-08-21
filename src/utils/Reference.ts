import {Cntnr} from "./Cntnr";

export class Reference extends Cntnr {
    private value: Cntnr;
    private isConst: boolean;
    private tipoNombre: string;

    constructor(tipoNombre?: string, isConst?: boolean) {
        super();
        this.typo = "REFERENCE";
        //TODO añadir Undefinied no null
        this.value = null;
        this.tipoNombre = tipoNombre;
        this.isConst = isConst;
    }

    public getReferenceValue = () : string => {
        return this.tipoNombre.toUpperCase();
    };

    public toString = (): string => {
        return this.value.toString();
    };

    public PutValueOnReference(value: Cntnr): void {
        let v: Cntnr;
        if (value instanceof Reference) {
            v = (value as Reference).value;
        } else {
            v = value;
        }
        this.value = v;
    }

    public getValue = (): Cntnr => {
        return this.value;
    };

    public setValue = (value: Cntnr): void => {
        this.value = value;
    };

    public Call = (args: Array<Cntnr>): object => {
        for (let arg of args) {
            console.log(arg);
        }
        return null;
    };
}
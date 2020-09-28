export class ErrorsControl {
    private static errors: Array<Error> = new Array<Error>();

    public static clearStructures() {
        ErrorsControl.errors = new Array<Error>();
    }

    public static GetErrors(): Array<Error> {
        return ErrorsControl.errors;
    }

    public static AddError(
        row: number,
        column: number,
        expected: string,
        obtained: string,
        typo: string,
    ): void {
        this.errors.push(new Error(
            row,
            column,
            expected,
            obtained,
            typo
        ));
    }
}

export class Error {
    private readonly row: number;
    private readonly column: number;
    private readonly expected: string;
    private readonly obtained: string;
    private readonly typo: string;

    constructor(
        row: number,
        column: number,
        expected: string,
        obtained: string,
        typo: string,
    ) {
        this.row = row;
        this.column = column;
        this.expected = expected;
        this.obtained = obtained;
        this.typo = typo;
    }
}
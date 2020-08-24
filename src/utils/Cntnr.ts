import {Reference} from "./Reference";

export abstract class Cntnr {
    private readonly owner: Cntnr;
    public readonly props = new Map<string, Cntnr>();
    public typo: string;

    protected constructor(owner?: Cntnr) {
        this.owner = owner || null;
    }

    public AsObjectProps(): string {
        let ans = "--------------------------------\n";
        this.props.forEach((v, k) => {
            ans += k + ' => ' + v + '\n';
        });
        ans += "--------------------------------\n";
        return ans;
    }

    public AddProperty(id: string, cntnr: Cntnr): void {
        id = id.toUpperCase();
        this.props.set(id, cntnr);
    }

    public GetProperty(id: string): Cntnr {
        id = id.toUpperCase();
        const val = this.props.get(id);
        if (val !== null) {
            return val;
        }

        this.props.set(id, new Reference());
        return this.props.get(id);
    }

    public Declare(id: string, cntnr: Cntnr): void {
        id = id.toUpperCase();
        this.props.set(id, cntnr);
    }

    public GetTypo(): string {
        return this.typo
    }

    public SetTypo(typo: string): void {
        this.typo = typo;
    }

    public GetOwner(): Cntnr {
        return this.owner;
    }
}

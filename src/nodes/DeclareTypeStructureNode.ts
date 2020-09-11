import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {ObjectsStructures, ObjectStructure} from "../utils/Utils";

export class DeclareTypeStructureNode extends Op{
    private readonly name: string;
    private readonly properties: Map<string, string>;

    constructor(name: string, properties: Map<string, string>) {
        super();
        this.name = name;
        this.properties = properties;
    }

    GO(env: Envmnt): object {
        const structure = new ObjectStructure(this.properties);
        ObjectsStructures.objects.set(this.name.toUpperCase(), structure);
        return undefined;
    }
}
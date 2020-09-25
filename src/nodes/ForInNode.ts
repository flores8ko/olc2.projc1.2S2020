import {Op} from "../utils/Op";
import {Envmnt} from "../utils/Envmnt";
import {Reference} from "../utils/Reference";
import {ARRAY, NUMBER, STRING} from "../utils/PrimitiveTypoContainer";
import {FindVar, SemanticException} from "../utils/Utils";
import {GraphvizNode} from "../utils/GraphvizNode";
import {TSGraphControl} from "../utils/TSGraphControl";

export class ForInNode extends Op {
    private readonly controlVar: string;
    private readonly newControlVar: boolean;
    private readonly array: Op;
    private readonly sentences: Array<Op>;

    constructor(controlVar: string, newControlVar: boolean, array: Op, sentences: Array<Op>) {
        super();
        this.controlVar = controlVar;
        this.newControlVar = newControlVar;
        this.array = array;
        this.sentences = sentences;
    }

    GO(env: Envmnt): object {
        let array = this.array.Exe(env);
        if (array instanceof Reference) {
            array = (array as Reference).getValue();
        }
        if (!(array instanceof ARRAY)) {
            throw new SemanticException("Se esperaba una referencia a un arreglo en ciclo For In");
        }

        const env0 = new Envmnt(env, this.sentences);
        if (this.newControlVar) {
            env0.AddProperty(this.controlVar, new Reference());
        }

        for(let index in (array as ARRAY).getValueList()){
            (FindVar(env0, this.controlVar) as Reference).setValue(new STRING(index));
            env0.GO_ALL();
        }
        return undefined;
    }

    GetGraph(env: Envmnt): GraphvizNode {
        return new GraphvizNode('FOR_IN', [new GraphvizNode(this.controlVar), new GraphvizNode('FOR_IN_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))]);
    }

    GetTSGraph(): string {
        let value = '';
        const graphId = TSGraphControl.GetGraphId();
        value += `subgraph cluster_${graphId} { \n`;
        value += 'style=filled;\n' +
            'color=black;\n' +
            'fillcolor="yellow";\n';
        value += 'node [fillcolor="yellow" shape="rectangle"] \n';
        value += `n${TSGraphControl.GetNodeId()} [label="${this.controlVar.toUpperCase()}"]\n`;
        value += this.array.GetTSGraph();
        this.sentences.forEach(sentence => {
            value += sentence.GetTSGraph();
        });
        value += `label = "${"FOR_IN_SENTENCE"}";\n`;
        value += `}\n`;
        return value;
    }

}

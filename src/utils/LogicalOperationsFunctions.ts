import {Cntnr} from "./Cntnr";
import {Reference} from "./Reference";
import {SemanticException} from "./Utils";
import {BOOLEAN, NAN, NULL, NUMBER, STRING, UNDEFINED} from "./PrimitiveTypoContainer";

export function Or(lf: Cntnr, rt: Cntnr): Cntnr {
    lf instanceof Reference ? lf = (lf as Reference).getValue() : lf;
    rt instanceof Reference ? rt = (rt as Reference).getValue() : rt;

    try{
        return or(lf, rt);
    }catch (e){
        throw new SemanticException(`Operacion entre tipos ( ${lf.typo} || ${rt.typo} ) no permitida.`);
    }

    function or(lf: any, rt: any): Cntnr {
        switch (true) {
            case lf instanceof BOOLEAN:
                switch (true) {
                    case rt instanceof BOOLEAN:
                        return  new BOOLEAN((lf as BOOLEAN).getValue() || (rt as BOOLEAN).getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}

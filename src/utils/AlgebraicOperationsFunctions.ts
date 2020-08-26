import {Cntnr} from "./Cntnr";
import {Reference} from "./Reference";
import {SemanticException} from "./Utils";
import {BOOLEAN, NAN, NULL, NUMBER, STRING, UNDEFINED} from "./PrimitiveTypoContainer";

export function Suma(lf: Cntnr, rt: Cntnr): Cntnr {
    lf instanceof Reference ? lf = (lf as Reference).getValue() : lf;
    rt instanceof Reference ? rt = (rt as Reference).getValue() : rt;

    try {
        return Sumar(lf, rt);
    } catch (e) {
        throw new SemanticException(`Operacion entre tipos ( ${lf.typo} + ${rt.typo} ) no permitida.`)
    }

    function Sumar(lf: any, rt: any): Cntnr {
        switch (true) {
            case lf instanceof NUMBER:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new NUMBER((lf as NUMBER).getValue() + (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new NUMBER((lf as NUMBER).getValue() + (rt as BOOLEAN).getValueNumber());
                    case rt instanceof STRING:
                        return new STRING((lf as NUMBER).getValue() + (rt as STRING).getValue());
                    case rt instanceof UNDEFINED:
                        return new NAN();
                    case rt instanceof NULL:
                        return new NUMBER((lf as NUMBER).getValue());
                    case rt instanceof NAN:
                        return new NAN();
                }
                break;
            case lf instanceof BOOLEAN:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new NUMBER((lf as BOOLEAN).getValueNumber() + (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new NUMBER((lf as BOOLEAN).getValueNumber() + (rt as BOOLEAN).getValueNumber());
                    case rt instanceof STRING:
                        return new STRING((lf as BOOLEAN).getValue() + (rt as STRING).getValue());
                    case rt instanceof UNDEFINED:
                        return new NAN();
                    case rt instanceof NULL:
                        return new BOOLEAN((lf as BOOLEAN).getValue());
                    case rt instanceof NAN:
                        return new NAN();
                }
                break;
            case lf instanceof STRING:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new STRING((lf as STRING).getValue() + (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new STRING((lf as STRING).getValue() + (rt as BOOLEAN).getValue());
                    case rt instanceof STRING:
                        return new STRING((lf as STRING).getValue() + (rt as STRING).getValue());
                    case rt instanceof UNDEFINED:
                        return new STRING((lf as STRING).getValue() + (rt as UNDEFINED));
                    case rt instanceof NULL:
                        return new STRING((lf as STRING).getValue() + (rt as NULL));
                    case rt instanceof NAN:
                        return new STRING((lf as STRING).getValue() + (rt as NAN));
                }
                break;
            case lf instanceof UNDEFINED:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new NAN();
                    case rt instanceof BOOLEAN:
                        return new NAN();
                    case rt instanceof STRING:
                        return new STRING((lf as UNDEFINED) + (rt as STRING).getValue());
                    case rt instanceof UNDEFINED:
                        return new NAN();
                    case rt instanceof NULL:
                        return new NAN();
                    case rt instanceof NAN:
                        return new NAN();
                }
                break;
            case lf instanceof NULL:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new NUMBER((rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new NUMBER((rt as BOOLEAN).getValueNumber());
                    case rt instanceof STRING:
                        return new STRING((lf as NULL) + (rt as STRING).getValue());
                    case rt instanceof UNDEFINED:
                        return new NAN();
                    case rt instanceof NULL:
                        return new NUMBER(0);
                    case rt instanceof NAN:
                        return new NAN();
                }
                break;
            case lf instanceof NAN:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new NAN();
                    case rt instanceof BOOLEAN:
                        return new NAN();
                    case rt instanceof STRING:
                        return new STRING((lf as NAN) + (rt as STRING).getValue());
                    case rt instanceof UNDEFINED:
                        return new NAN();
                    case rt instanceof NULL:
                        return new NAN();
                    case rt instanceof NAN:
                        return new NAN();
                }
                break;
            default:
                throw new Error();
        }
    }
}

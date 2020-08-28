import {Cntnr} from "./Cntnr";
import {Reference} from "./Reference";
import {SemanticException} from "./Utils";
import {BOOLEAN, NAN, NULL, NUMBER, STRING, UNDEFINED} from "./PrimitiveTypoContainer";

export function Igual(lf: Cntnr, rt: Cntnr): Cntnr {
    lf instanceof Reference ? lf = (lf as Reference).getValue() : lf;
    rt instanceof Reference ? rt = (rt as Reference).getValue() : rt;

    try {
        return Eq(lf, rt);
    } catch (e) {
        throw new SemanticException(`Operacion entre tipos ( ${lf.typo} == ${rt.typo} ) no permitida.`)
    }

    function Eq(lf: any, rt: any): Cntnr {
        switch (true) {
            case lf instanceof NUMBER:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new BOOLEAN((lf as NUMBER).getValue() === (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new BOOLEAN((lf as NUMBER).getValue() === (rt as BOOLEAN).getValueNumber());
                    case rt instanceof NULL:
                        return new BOOLEAN(false);
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(false);
                    case rt instanceof NAN:
                        return new BOOLEAN(false);
                    default:
                        throw new Error();
                }
            case lf instanceof BOOLEAN:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new BOOLEAN((lf as BOOLEAN).getValueNumber() == (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new BOOLEAN((lf as BOOLEAN).getValueNumber() == (rt as BOOLEAN).getValueNumber());
                    case rt instanceof NULL:
                        return new BOOLEAN(false);
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(false);
                    case rt instanceof NAN:
                        return new BOOLEAN(false);
                    default:
                        throw new Error();
                }
            case lf instanceof STRING:
                switch (true) {
                    case rt instanceof STRING:
                        return new BOOLEAN((lf as STRING).getValue() === (rt as STRING).getValue());
                    case rt instanceof NULL:
                        return new BOOLEAN(false);
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(false);
                    case rt instanceof NAN:
                        return new BOOLEAN(false);
                    default:
                        throw new Error();
                }
            case lf instanceof UNDEFINED:
                switch (true) {
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(true);
                    default:
                        return new BOOLEAN(false);
                }
            case lf instanceof NULL:
                switch (true) {
                    case rt instanceof NULL:
                        return new BOOLEAN(true);
                    default:
                        return new BOOLEAN(false);
                }
            case lf instanceof NAN:
                switch (true) {
                    case rt instanceof NAN:
                        return new BOOLEAN(true);
                    default:
                        return new BOOLEAN(false);
                }
        }
    }
}

export function Diferente(lf: Cntnr, rt: Cntnr): Cntnr {
    lf instanceof Reference ? lf = (lf as Reference).getValue() : lf;
    rt instanceof Reference ? rt = (rt as Reference).getValue() : rt;

    try {
        return Dif(lf, rt);
    } catch (e) {
        throw new SemanticException(`Operacion entre tipos ( ${lf.typo} == ${rt.typo} ) no permitida.`)
    }

    function Dif(lf: any, rt: any): Cntnr {
        switch (true) {
            case lf instanceof NUMBER:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new BOOLEAN((lf as NUMBER).getValue() !== (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new BOOLEAN((lf as NUMBER).getValue() !== (rt as BOOLEAN).getValueNumber());
                    case rt instanceof NULL:
                        return new BOOLEAN(true);
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(true);
                    case rt instanceof NAN:
                        return new BOOLEAN(true);
                    default:
                        throw new Error();
                }
            case lf instanceof BOOLEAN:
                switch (true) {
                    case rt instanceof NUMBER:
                        return new BOOLEAN((lf as BOOLEAN).getValueNumber() != (rt as NUMBER).getValue());
                    case rt instanceof BOOLEAN:
                        return new BOOLEAN((lf as BOOLEAN).getValueNumber() != (rt as BOOLEAN).getValueNumber());
                    case rt instanceof NULL:
                        return new BOOLEAN(true);
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(true);
                    case rt instanceof NAN:
                        return new BOOLEAN(true);
                    default:
                        throw new Error();
                }
            case lf instanceof STRING:
                switch (true) {
                    case rt instanceof STRING:
                        return new BOOLEAN((lf as STRING).getValue() !== (rt as STRING).getValue());
                    case rt instanceof NULL:
                        return new BOOLEAN(true);
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(true);
                    default:
                        throw new Error();
                }
            case lf instanceof UNDEFINED:
                switch (true) {
                    case rt instanceof UNDEFINED:
                        return new BOOLEAN(false);
                    default:
                        return new BOOLEAN(true);
                }
            case lf instanceof NULL:
                switch (true) {
                    case rt instanceof NULL:
                        return new BOOLEAN(false);
                    default:
                        throw new BOOLEAN(true);
                }
            case lf instanceof NAN:
                switch (true) {
                    case rt instanceof NAN:
                        return new BOOLEAN(false);
                    default:
                        throw new BOOLEAN(true);
                }
            default:
                throw new Error();
        }
    }
}

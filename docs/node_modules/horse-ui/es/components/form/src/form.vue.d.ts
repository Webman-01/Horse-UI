import { Values } from "async-validator";
import { CSSProperties } from "vue";
import { FormItemContext } from "./form-item";
declare const _default: import("vue").DefineComponent<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Record<string, import("./form-item").ArrayAble<import("./form-item").FormItemRule>>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxWidth: import("vue").PropType<number | string>;
}, {
    bem: {
        b: (blockSuffix?: string) => string;
        e: (element?: string) => string;
        m: (modifier?: string) => string;
        be: (blockSuffix?: string, element?: string) => string;
        bm: (blockSuffix?: string, modifier?: string) => string;
        em: (element?: string, modifier?: string) => string;
        bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
        is: (name: string, state: boolean | undefined) => string;
    };
    props: any;
    validate: (callback?: (validate: boolean, fields?: Values) => void) => Promise<void>;
    fields: FormItemContext[];
    addField: (field: FormItemContext) => void;
    context: any;
    style: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Record<string, import("./form-item").ArrayAble<import("./form-item").FormItemRule>>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxWidth: import("vue").PropType<number | string>;
}>>, {
    readonly showMessage: boolean;
}, {}>;
export default _default;

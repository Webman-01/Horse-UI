import { CSSProperties } from "vue";
import { IconProps } from "./icon";
declare const _default: import("vue").DefineComponent<{
    readonly color: StringConstructor;
    readonly size: import("vue").PropType<number | string>;
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
    props: IconProps;
    style: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly color: StringConstructor;
    readonly size: import("vue").PropType<number | string>;
}>>, {}, {}>;
export default _default;

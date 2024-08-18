declare const _default: import("vue").DefineComponent<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: ArrayConstructor;
        default: () => any;
    };
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
    showHeight: import("vue").Ref<HTMLElement>;
    scrollBarHeight: import("vue").Ref<HTMLElement>;
    scrollTopDistance: import("vue").Ref<number>;
    state: {
        start: number;
        end: any;
    };
    visibleData: import("vue").ComputedRef<any>;
    prevData: import("vue").ComputedRef<number>;
    nextData: import("vue").ComputedRef<number>;
    handleScroll: () => void;
    initData: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    remain: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: ArrayConstructor;
        default: () => any;
    };
}>>, {
    size: number;
    remain: number;
    items: unknown[];
}, {}>;
export default _default;

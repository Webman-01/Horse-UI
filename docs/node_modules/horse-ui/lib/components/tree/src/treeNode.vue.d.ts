import { TreeNode } from "./tree";
declare const _default: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<NonNullable<TreeNode>>;
        required: boolean;
    };
    expanded: {
        type: BooleanConstructor;
        required: boolean;
    };
    loadingKeys: {
        type: import("vue").PropType<Set<import("./tree").Key>>;
        required: boolean;
    };
    selectedKeys: {
        type: ArrayConstructor;
        default: () => import("./tree").TreeOptions[];
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragEventKey: {
        type: import("vue").PropType<Set<import("./tree").Key>>;
    };
    checked: BooleanConstructor;
    disabled: BooleanConstructor;
    indeterminate: BooleanConstructor;
    draggable: BooleanConstructor;
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
    emit: ((event: "select", node: TreeNode) => void) & ((event: "toggle", node: TreeNode) => void) & ((event: "check", node: TreeNode, val: boolean) => void);
    handleExpand: () => void;
    isLoading: import("vue").ComputedRef<any>;
    isSelected: import("vue").ComputedRef<any>;
    handleSelected: () => void;
    handleCheckboxChange: (val: boolean) => void;
    readonly CaretForwardSharp: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    readonly Reload: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    readonly HIcon: import("vue").Component;
    readonly HTreeNodeContent: import("vue").DefineComponent<{
        node: {
            type: import("vue").PropType<TreeNode>;
            required: boolean;
        };
    }, () => import("./tree").Key | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        node: {
            type: import("vue").PropType<TreeNode>;
            required: boolean;
        };
    }>>, {}, {}>;
    readonly HCheckbox: import("vue").Component;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggle: (node: TreeNode) => TreeNode;
    select: (node: TreeNode) => TreeNode;
    check: (node: TreeNode, val: boolean) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    node: {
        type: import("vue").PropType<NonNullable<TreeNode>>;
        required: boolean;
    };
    expanded: {
        type: BooleanConstructor;
        required: boolean;
    };
    loadingKeys: {
        type: import("vue").PropType<Set<import("./tree").Key>>;
        required: boolean;
    };
    selectedKeys: {
        type: ArrayConstructor;
        default: () => import("./tree").TreeOptions[];
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragEventKey: {
        type: import("vue").PropType<Set<import("./tree").Key>>;
    };
    checked: BooleanConstructor;
    disabled: BooleanConstructor;
    indeterminate: BooleanConstructor;
    draggable: BooleanConstructor;
}>> & {
    onSelect?: (node: TreeNode) => any;
    onToggle?: (node: TreeNode) => any;
    onCheck?: (node: TreeNode, val: boolean) => any;
}, {
    disabled: boolean;
    indeterminate: boolean;
    selectedKeys: unknown[];
    showCheckbox: boolean;
    expanded: boolean;
    checked: boolean;
    draggable: boolean;
}, {}>;
export default _default;

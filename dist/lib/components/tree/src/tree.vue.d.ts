import { Key, TreeNode, TreeOptions } from "./tree";
declare const _default: import("vue").DefineComponent<{
    readonly data: {
        readonly type: import("vue").PropType<TreeOptions[]>;
        readonly default: () => TreeOptions[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import("vue").PropType<Key[]>;
        readonly default: () => TreeOptions[];
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly treeKey: {
        readonly type: StringConstructor;
        readonly default: "treeKey";
    };
    readonly children: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly lazy: import("vue").PropType<(node: TreeOptions) => Promise<TreeOptions[]>>;
    readonly selectedKeys: {
        readonly type: import("vue").PropType<Key[]>;
    };
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import("vue").PropType<Key[]>;
        readonly default: () => TreeOptions[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly nodeRemain: {
        readonly tye: NumberConstructor;
        readonly default: 8;
    };
    readonly nodeSize: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
}, {
    props: any;
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
    createOptions: (key: string, label: string, children: string) => {
        getKey(node: TreeOptions): string;
        getLabel(node: TreeOptions): string;
        getChildren(node: TreeOptions): TreeOptions[];
    };
    treeOption: {
        getKey(node: TreeOptions): string;
        getLabel(node: TreeOptions): string;
        getChildren(node: TreeOptions): TreeOptions[];
    };
    createTree: (data: TreeOptions[], parent?: TreeNode | null) => TreeNode[];
    tree: import("vue").Ref<{
        [x: string]: unknown;
        level: number;
        rawNode: {
            [x: string]: unknown;
            label?: Key;
            treeKey?: Key;
            children?: any[];
            isLeaf?: boolean;
            disabled?: boolean;
        };
        children: any[];
        isLeaf: boolean;
        parentKey: Key | undefined;
        label: Key;
        treeKey: Key;
        disabled: boolean;
    }[]>;
    expandedKeySet: import("vue").Ref<Set<unknown> & Omit<Set<unknown>, keyof Set<any>>>;
    flatTree: import("vue").ComputedRef<TreeNode[]>;
    isExpanded: (node: TreeNode) => boolean;
    toggleExpandAndCollapse: (node: TreeNode) => void;
    collapse: (node: TreeNode) => void;
    loadingKeysRef: import("vue").Ref<Set<Key> & Omit<Set<Key>, keyof Set<any>>>;
    expand: (node: TreeNode) => void;
    emit: (event: "update:selectedKeys", keys: Key[]) => void;
    selectTreeRef: import("vue").Ref<Key[]>;
    handleSelect: (node: TreeNode) => void;
    checkedKeysRefs: import("vue").Ref<Set<Key> & Omit<Set<Key>, keyof Set<any>>>;
    isChecked: (node: TreeNode) => boolean;
    isDisabled: (node: TreeNode) => boolean;
    indeterminateRefs: import("vue").Ref<Set<Key> & Omit<Set<Key>, keyof Set<any>>>;
    isIndeterminate: (node: TreeNode) => boolean;
    toggle: (node: TreeNode, isChecked: boolean) => void;
    findNode: (key: Key) => TreeNode;
    updateCheckedKeys: (node: TreeNode) => void;
    toggleCheck: (node: TreeNode, isChecked: boolean) => void;
    dragTreeKeys: import("vue").ComputedRef<Key[]>;
    HTreeNode: import("vue").DefineComponent<{
        node: {
            type: import("vue").PropType<NonNullable<TreeNode>>;
            required: boolean;
        };
        expanded: {
            type: BooleanConstructor;
            required: boolean;
        };
        loadingKeys: {
            type: import("vue").PropType<Set<Key>>;
            required: boolean;
        };
        selectedKeys: {
            type: ArrayConstructor;
            default: () => TreeOptions[];
        };
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        dragEventKey: {
            type: import("vue").PropType<Set<Key>>;
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
        }, () => Key | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            type: import("vue").PropType<Set<Key>>;
            required: boolean;
        };
        selectedKeys: {
            type: ArrayConstructor;
            default: () => TreeOptions[];
        };
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        dragEventKey: {
            type: import("vue").PropType<Set<Key>>;
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
    HVirtualList: import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:selectedKeys": (keys: Key[]) => Key[];
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<TreeOptions[]>;
        readonly default: () => TreeOptions[];
    };
    readonly defaultExpandedKeys: {
        readonly type: import("vue").PropType<Key[]>;
        readonly default: () => TreeOptions[];
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "label";
    };
    readonly treeKey: {
        readonly type: StringConstructor;
        readonly default: "treeKey";
    };
    readonly children: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly lazy: import("vue").PropType<(node: TreeOptions) => Promise<TreeOptions[]>>;
    readonly selectedKeys: {
        readonly type: import("vue").PropType<Key[]>;
    };
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly defaultCheckedKeys: {
        readonly type: import("vue").PropType<Key[]>;
        readonly default: () => TreeOptions[];
    };
    readonly showCheckbox: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly nodeRemain: {
        readonly tye: NumberConstructor;
        readonly default: 8;
    };
    readonly nodeSize: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
}>> & {
    "onUpdate:selectedKeys"?: (keys: Key[]) => any;
}, {
    readonly data: TreeOptions[];
    readonly label: string;
    readonly treeKey: string;
    readonly children: string;
    readonly defaultExpandedKeys: Key[];
    readonly selectable: boolean;
    readonly multiple: boolean;
    readonly defaultCheckedKeys: Key[];
    readonly showCheckbox: boolean;
    readonly nodeRemain: 8;
    readonly nodeSize: number;
}, {}>;
export default _default;

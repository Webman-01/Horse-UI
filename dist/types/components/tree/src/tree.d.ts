import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from "vue";
export interface TreeNode extends Required<TreeOptions> {
    level: number;
    rawNode: TreeOptions;
    children: TreeNode[];
    isLeaf: boolean;
    parentKey: Key | undefined;
}
export type Key = string | number;
export interface TreeOptions {
    label?: Key;
    treeKey?: Key;
    children?: TreeOptions[];
    [treeKey: string]: unknown;
    isLeaf?: boolean;
    disabled?: boolean;
}
export declare const treeProps: {
    readonly data: {
        readonly type: PropType<TreeOptions[]>;
        readonly default: () => TreeOptions[];
    };
    readonly defaultExpandedKeys: {
        readonly type: PropType<Key[]>;
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
    readonly lazy: PropType<(node: TreeOptions) => Promise<TreeOptions[]>>;
    readonly selectedKeys: {
        readonly type: PropType<Key[]>;
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
        readonly type: PropType<Key[]>;
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
};
export declare const treeNodeProps: {
    node: {
        type: PropType<NonNullable<TreeNode>>;
        required: boolean;
    };
    expanded: {
        type: BooleanConstructor;
        required: boolean;
    };
    loadingKeys: {
        type: PropType<Set<Key>>;
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
        type: PropType<Set<Key>>;
    };
    checked: BooleanConstructor;
    disabled: BooleanConstructor;
    indeterminate: BooleanConstructor;
    draggable: BooleanConstructor;
};
export declare const treeNodeEmits: {
    toggle: (node: TreeNode) => TreeNode;
    select: (node: TreeNode) => TreeNode;
    check: (node: TreeNode, val: boolean) => boolean;
};
export declare const treeSelectEmit: {
    "update:selectedKeys": (keys: Key[]) => Key[];
};
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
export interface TreeContext {
    slots: SetupContext["slots"];
}
export declare const injectTreeKey: InjectionKey<TreeContext>;
export declare const treeNodeContentProps: {
    node: {
        type: PropType<TreeNode>;
        required: boolean;
    };
};

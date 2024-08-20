import { UploadRawFile } from "./upload";
declare const _default: import("vue").DefineComponent<{
    readonly beforeUpload: {
        readonly type: import("vue").PropType<(file: UploadRawFile) => Promise<boolean> | boolean>;
        readonly default: () => void;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(file: import("./upload").UploadFile) => void>;
        readonly default: () => void;
    };
    readonly onStart: {
        readonly type: import("vue").PropType<(rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onProgress: {
        readonly type: import("vue").PropType<(file: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onRemove: {
        readonly type: import("vue").PropType<(rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onError: {
        readonly type: import("vue").PropType<(error: any, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onSuccess: {
        readonly type: import("vue").PropType<(res: any, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly FileList: {
        readonly type: import("vue").PropType<import("./upload").UploadFiles>;
        readonly default: () => readonly [];
    };
    readonly action: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "file";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly method: {
        readonly type: StringConstructor;
        readonly default: "post";
    };
    readonly headers: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly data: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly drag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly avatarUploader: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showFileList: {
        readonly type: BooleanConstructor;
        readonly default: true;
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
    inputRef: import("vue").Ref<HTMLInputElement>;
    handleClick: () => void;
    upload: (file: UploadRawFile) => Promise<any>;
    uploadFiles: (files: FileList) => void;
    handleChange: (e: Event) => void;
    UploadDragger: import("vue").DefineComponent<{}, {
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
        isOver: import("vue").Ref<boolean>;
        emit: (event: string, ...args: any[]) => void;
        onDrop: (e: DragEvent) => void;
        onDragover: (e: DragEvent) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly beforeUpload: {
        readonly type: import("vue").PropType<(file: UploadRawFile) => Promise<boolean> | boolean>;
        readonly default: () => void;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(file: import("./upload").UploadFile) => void>;
        readonly default: () => void;
    };
    readonly onStart: {
        readonly type: import("vue").PropType<(rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onProgress: {
        readonly type: import("vue").PropType<(file: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onRemove: {
        readonly type: import("vue").PropType<(rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onError: {
        readonly type: import("vue").PropType<(error: any, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly onSuccess: {
        readonly type: import("vue").PropType<(res: any, rawFile: UploadRawFile) => void>;
        readonly default: () => void;
    };
    readonly FileList: {
        readonly type: import("vue").PropType<import("./upload").UploadFiles>;
        readonly default: () => readonly [];
    };
    readonly action: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: "file";
    };
    readonly accept: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly method: {
        readonly type: StringConstructor;
        readonly default: "post";
    };
    readonly headers: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly data: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
    readonly drag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly avatarUploader: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showFileList: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly name: string;
    readonly data: Record<string, any>;
    readonly onChange: (file: import("./upload").UploadFile) => void;
    readonly drag: boolean;
    readonly multiple: boolean;
    readonly beforeUpload: (file: UploadRawFile) => Promise<boolean> | boolean;
    readonly onRemove: (rawFile: UploadRawFile) => void;
    readonly onProgress: (file: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void;
    readonly onSuccess: (res: any, rawFile: UploadRawFile) => void;
    readonly onError: (error: any, rawFile: UploadRawFile) => void;
    readonly FileList: import("./upload").UploadFiles;
    readonly action: string;
    readonly accept: string;
    readonly method: string;
    readonly headers: Record<string, any>;
    readonly avatarUploader: boolean;
    readonly showFileList: boolean;
    readonly onStart: (rawFile: UploadRawFile) => void;
}, {}>;
export default _default;

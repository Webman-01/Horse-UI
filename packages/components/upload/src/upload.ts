import { ExtractPropTypes, PropType } from "vue";

export interface UploadFile {
  uid?: number;
  name: string;
  url?: string;
  percentage?: number;
  raw?: File;
  size?: number;
  status: string;
}
export type UploadFiles = UploadFile[];

export const baseProps = {
  FileList: {
    type: Array as PropType<UploadFiles>,
    default: () => [] as const,
  },
  action: {
    type: String,
    default: "",
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  //input中需要的类型
  name: {
    type: String,
    default: "file",
  },
  accept: {
    type: String,
    default: "",
  },
  //上传文件调用ajax需要的
  method: {
    type: String,
    default: "post",
  },
  headers: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Object,
    default: () => ({}),
  },
  drag: {
    type: Boolean,
    default: false,
  },
} as const;

export type UploadRawFile = File & { uid: number };
export type UploadProgressEvent = ProgressEvent & { percentage: number };
const DefaultFunction = () => {};
export const uploadProps = {
  ...baseProps,
  //预览
  onPreview: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: DefaultFunction,
  },
  beforeUpload: {
    type: Function as PropType<
      (file: UploadRawFile) => Promise<boolean> | boolean
    >,
    default: DefaultFunction,
  },
  onChange: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: DefaultFunction,
  },
  beforeRemove: {
    type: Function as PropType<
      (file: UploadFile, uploadFiles: UploadFiles) => Promise<boolean> | boolean
    >,
    default: DefaultFunction,
  },
  onRemove: {
    type: Function as PropType<
      (file: UploadFile, uploadFiles: UploadFiles) => Promise<boolean> | boolean
    >,
    default: DefaultFunction,
  },
  onProgress: {
    type: Function as PropType<
      (
        file: UploadProgressEvent,
        uploadFile: UploadFile,
        uploadFiles: UploadFiles
      ) => void
    >,
    default: DefaultFunction,
  },
  onSuccess: {
    type: Function as PropType<
      (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: DefaultFunction,
  },
  onError: {
    type: Function as PropType<
      (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: DefaultFunction,
  },
} as const;
export type UploadProps = ExtractPropTypes<typeof uploadProps>;

let id: number = 0;
export const genId = () => id++;

import { ExtractPropTypes, PropType } from "vue";
import {
  UploadProgressEvent,
  UploadRawFile,
  baseProps,
  uploadProps,
} from "./upload";

const defaultFunction = () => {};
export const uploadContentProps = {
  ...baseProps,
  beforeUpload: uploadProps["beforeUpload"],
  onChange: uploadProps["onChange"],
  onStart: {
    type: Function as PropType<(rawFile: UploadRawFile) => void>,
    default: defaultFunction,
  },
  onProgress: {
    type: Function as PropType<
      (file: UploadProgressEvent, rawFile: UploadRawFile) => void
    >,
    default: defaultFunction,
  },
  onRemove: {
    type: Function as PropType<(rawFile: UploadRawFile) => void>,
    default: defaultFunction,
  },
  onError: {
    type: Function as PropType<(error: any, rawFile: UploadRawFile) => void>,
    default: defaultFunction,
  },
  onSuccess: {
    type: Function as PropType<(res: any, rawFile: UploadRawFile) => void>,
    default: defaultFunction,
  },
} as const;
export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>;

export interface RequestOptions {
  method: string;
  file: File;
  name: string;
  action: string;
  headers: Headers | Record<string,any>;
  data: Record<string, any>;
  onError: (e: any) => void;
  onSuccess: (response: any) => void;
  onProgress: (e: UploadProgressEvent) => void;
}

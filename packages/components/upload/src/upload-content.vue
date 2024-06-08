<template>
  <div @click="handleClick" :class="[bem.b()]">
    <template v-if="drag">
      <UploadDragger @file="uploadFiles">
        <slot></slot>
      </UploadDragger>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    
    <input
      type="file"
      ref="inputRef"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createNameSpace } from "../../../utils/create";
import { genId, uploadProps, UploadRawFile } from "./upload";
import { uploadContentProps } from "./upload-content";
import { httpRequest } from "./ajax";
import UploadDragger from "./upload-content-drag.vue";

defineOptions({
  name: "h-upload",
  inheritAttrs: false,
});
const bem = createNameSpace("upload");
const props = defineProps(uploadContentProps);

const inputRef = ref<HTMLInputElement>();
const handleClick = () => {
  inputRef.value!.value = "";
  inputRef.value!.click();
};
async function upload(file: UploadRawFile){
  //上传前输入框清空
  inputRef.value!.value = "";
  let result = await props.beforeUpload(file);
  //停止上传
  if (!result) return props.onRemove(file);
  console.log(result, "result");
//   上传的过程(ajax处理)
  const { method, name, action, headers, data } = props;
  httpRequest({
    method,
    file:file,
    name,
    action,
    headers,
    data,
    onError: (error) => {
      props.onError(error, file);
    },
    onSuccess: (res) => {
      props.onSuccess(res, file);
    },
    onProgress: (e) => {
      props.onProgress(e, file);
    },
  });
};
//文件上传
const uploadFiles = (files:FileList) => {
    for (let i = 0; i < files.length; i++) {
    const rawFile = files[i] as UploadRawFile;
    rawFile.uid = genId();
    props.onStart(rawFile)
    upload(rawFile);
  }
}
//变化时处理文件
const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files!;
//   console.log(files, "files");
  uploadFiles(files)
  console.log(files, "files");
};
</script>

<style></style>

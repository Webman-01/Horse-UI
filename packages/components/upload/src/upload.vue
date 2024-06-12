<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  {{ uploadFiles }}
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { UploadFile, UploadFiles, uploadProps, UploadRawFile } from "./upload";
import { UploadContentProps } from "./upload-content";
import UploadContent from "./upload-content.vue";
defineOptions({
  name: "h-upload",
});
//属性从App.vue传到这里(父)再传到子(upload-content)----通过v-bind
const props = defineProps(uploadProps);
const emit = defineEmits({});

//文件列表
const uploadFiles = ref<UploadFiles>(props.FileList);

watch(uploadFiles, (newVal) => {
  emit("onUpdate:file-list", newVal);
});
const findFile = (rawFile: UploadRawFile) => {
  return uploadFiles.value.find((file) => file.uid === rawFile.uid);
};
const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  //上传前
  onStart: (rawFile) => {
    console.log("start");
    // //上传前处理一下文件
    const uploadFile: UploadFile = {
      uid: rawFile.uid,
      name: rawFile.name,
      percentage: 0,
      raw: rawFile,
      size: rawFile.size,
      status: "start",
    };
    uploadFile.url = URL.createObjectURL(rawFile);
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile);
  },
  onProgress: (file, rawFile) => {
    console.log("progress");
    const uploadFile = findFile(rawFile)!;
    console.log(uploadFiles.value, "000");

    uploadFile.status = "uploading";
    uploadFile.percentage = file.percentage;
    props.onProgress(file, uploadFile, uploadFiles.value);
  },
  onRemove: async (rawFile) => {
    console.log("remove");
    const uploadFile = findFile(rawFile)!;
    const result = await props.beforeRemove(uploadFile, uploadFiles.value);
    if (result) {
      const fileList = uploadFiles.value;
      //删除文件
      fileList.splice(fileList.indexOf(uploadFile), 1);
      props.onRemove(uploadFile, uploadFiles.value);
    }
  },
  onError: (error, rawFile) => {
    console.log("err");
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = "error";
    const fileList = uploadFiles.value;
    fileList.splice(fileList.indexOf(uploadFile), 1);
    props.onError(error, uploadFile, fileList);
  },
  onSuccess: (res, rawFile) => {
    console.log("success");
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = "success";
    const fileList = uploadFiles.value;
    props.onSuccess(res, uploadFile, fileList);
  },
}));
</script>

<style></style>

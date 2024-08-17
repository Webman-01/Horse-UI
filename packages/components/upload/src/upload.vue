<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  <!-- {{ uploadFiles }} -->
  <!-- 展示的文件列表 -->
  <div :class="bem.b('list')" v-show="showFileList">
    <div
      :class="bem.be('list', 'item')"
      v-for="(item, index) in uploadFiles"
      :key="index"
    >
      <div :class="bem.be('list', 'item-name')">{{ item.name }}</div>
      <!-- show check -->
      <div :class="bem.be('list', 'item-label')">
        <HIcon :size="20" v-show="item.percentage === 100">
          <CheckmarkCircleOutline></CheckmarkCircleOutline>
        </HIcon>
      </div>
      <!-- show close -->
      <div :class="bem.be('list', 'item-label-hover')">
        <HIcon @click="deleteFile(index)" :size="20">
          <CloseOutline></CloseOutline>
        </HIcon>
      </div>
      <!-- 进度条 -->
      <div :class="bem.b('progress')" v-show="item.percentage !== 100">
        <div
          :class="bem.b('pro1gress-bar')"
          :style="{ width: item.percentage + '%' }"
        ></div>
        <div class="progress-text">{{ Math.floor(item.percentage) }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  updateEmits,
  UploadFile,
  UploadFiles,
  uploadProps,
  UploadRawFile,
} from "./upload";
import { UploadContentProps } from "./upload-content";
import UploadContent from "./upload-content.vue";
import { createNameSpace } from "../../../utils/create";
import HIcon from "../../../components/icon";
import { CloseOutline, CheckmarkCircleOutline } from "@vicons/ionicons5";
defineOptions({
  name: "h-upload",
});
const bem = createNameSpace("upload");
//属性从App.vue传到这里(父)再传到子(upload-content)----通过v-bind
const props:any = defineProps(uploadProps);
const emit = defineEmits(updateEmits);

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

//删除文件
const deleteFile = (index: number) => {
  uploadFiles.value.splice(index, 1);
  emit("onUpdate:file-list", uploadFiles);
};
</script>

<style></style>

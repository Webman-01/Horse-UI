<template>
  <h-upload
    multiple
    :before-upload="handleBeforeUpload"
    action="http://localhost:4000/upload"
    :show-file-list="true"
  >
    <h-button type="primary">click to upload</h-button>
  </h-upload>
</template>

<script setup lang="ts">
import { UploadRawFile } from "@uuio/components/upload";

//upload组件部分
const handleBeforeUpload = (rawFile: UploadRawFile) => {
  console.log(rawFile);
  return true;
};
</script>

<style>

</style>
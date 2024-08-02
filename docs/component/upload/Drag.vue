<template>
  <h-upload
    multiple
    :before-upload="handleBeforeUpload"
    action="http://localhost:4000/upload"
    drag
    :show-file-list="true"
  >
    <HIcon :size="50">
      <CloudUploadOutline></CloudUploadOutline>
    </HIcon>
    <div class="h-upload__text">
      Drop file to here or
      <em>click to upload</em>
    </div>
  </h-upload>
</template>

<script setup lang="ts">
import { CloudUploadOutline } from "@vicons/ionicons5";
import { UploadRawFile } from "@uuio/components/upload";
import HIcon from "../../../packages/components/icon";

const handleBeforeUpload = (rawFile: UploadRawFile) => {
  console.log(rawFile);
  return true;
};
</script>

<style></style>

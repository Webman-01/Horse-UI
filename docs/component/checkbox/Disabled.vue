<template>
    <h-checkbox v-model="check1" label="option1" :disabled="true"></h-checkbox>
    <h-checkbox v-model="check2" label="option2"></h-checkbox>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  const check1 = ref<boolean>(false);
  const check2 = ref<boolean>(true);
  </script>
  
  <style scoped>
  .h-checkbox {
    margin-left: 15px;
  }
  </style>
  
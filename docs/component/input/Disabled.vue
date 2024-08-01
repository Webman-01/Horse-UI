<template>
    <div style="width: 500px">
      <h-input v-model="inputWords" placeholder="Please input" :disabled="true"> </h-input>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const inputWords = ref("");
  </script>
<template>
  <h-form :max-width="500">
    <h-form-item :label="'oooo'">
        <h-input></h-input>
    </h-form-item>
  </h-form>
  <h-form :max-width="500">
    <h-form-item :label="'oooo'">
        <h-input></h-input>
        <template #label>uuuu</template>
    </h-form-item>
  </h-form>
</template>

<script setup lang="ts">

</script>

<style>

</style>
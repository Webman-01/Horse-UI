<template>
  <form :class="bem.b()">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide } from "vue";
import { createNameSpace } from "../../../utils/create";
import { FormContextKey, formProps } from "./form";

const bem = createNameSpace('form')
defineOptions({
    name:'h-form'
})
const props = defineProps(formProps)

const context = {
    ...props
}
provide(FormContextKey,context)
</script>

<style>

</style>
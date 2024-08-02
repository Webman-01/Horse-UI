<template>
  <h-form
    :max-width="500"
    style="margin-left: 20px"
    ref="formRef"
    :model="state"
    :rules="{
      username: {
        min: 6,
        max: 10,
        message: '6-10位',
        trigger: ['change', 'blur'],
      },
    }"
  >
    <h-form-item
      prop="username"
      :required="true"
      :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
    >
      <h-input placeholder="请输入用户名" v-model="state.username"></h-input>
      <template #label>用户名</template>
    </h-form-item>

    <h-form-item
      prop="password"
      :required="true"
      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
    >
      <h-input
        placeholder="请输入密码"
        v-model="state.password"
        type="password"
      ></h-input>
      <template #label>密码</template>
    </h-form-item>
    <h-button @click="validateForm" type="primary" >点击校验</h-button>
  </h-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const state = reactive({ username: "", password: "" });

const formRef = ref();
const validateForm = () => {
  const form = formRef.value;
  form?.validate((valid, error) => {
    console.log(valid, error);
  });
};
</script>

<style></style>

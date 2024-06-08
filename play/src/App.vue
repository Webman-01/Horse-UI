<template>
  <h-icon :color="'yellow'" :size="30" style="margin-bottom: 20px">
    <Accessibility></Accessibility>
  </h-icon>

  <!-- 使用的时候传递一个树型的数据结构 -->
  <h-tree :data="data" label="xxx" treeKey="key" children="children">
    <template #default="{ node }">
      {{ node.treeKey }}-{{ node.label }}
    </template>
  </h-tree>
  <br />
  <hr />
  <h-tree
    :data="data2"
    :lazy="handleLoad"
    v-model:selected-keys="selectedValue"
    selectable
    multiple
  ></h-tree>
  <br />
  <hr />
  <h-tree
    :data="data3"
    :lazy="handleLoad"
    v-model:selected-keys="selectedValue"
    selectable
    multiple
    show-checkbox
    :default-checked-keys="['0', '0-1']"
  ></h-tree>

  <br />
  <hr />
  {{ check }}
  <h-checkbox
    v-model:modelVal="check"
    :disabled="false"
    :indeterminate="false"
    label="ma"
    @change="handleChange"
    >hh
  </h-checkbox>
  <br />
  <hr />

  <!-- 按钮组件 -->
  <h-button
    type="success"
    icon-placement="left"
    @click="handleClick"
    @mousedown="handleClick"
    >我是按钮
    <template #icon>
      <h-icon>
        <Accessibility></Accessibility>
      </h-icon>
    </template>
  </h-button>

  <br />
  <hr />

  <!-- input组件 -->
  <h-input
    v-model="inputWords"
    @blur="handleBlur"
    @focus="handleFocus"
    placeholder="哈哈哈"
    :show-password="true"
    :clearable="true"
  >
    <template #prefix>头部内容</template>
    <template #prepend>
      <h-icon>
        <Accessibility></Accessibility>
      </h-icon>
    </template>
    <template #append>
      <h-icon>
        <Accessibility></Accessibility>
      </h-icon>
    </template>
    <template #suffix>尾部内容</template>
  </h-input>

  <br />
  <hr />

  <!-- form组件 -->
  <h-form
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
      :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
    >
      <h-input placeholder="请输入用户名" v-model="state.username"></h-input>
      <template #label>用户名 </template>
    </h-form-item>

    <h-form-item
      prop="password"
      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
    >
      <h-input
        placeholder="请输入密码"
        v-model="state.password"
        type="password"
      ></h-input>
      <template #label>密码 </template>
    </h-form-item>
    <h-button @click="validateForm">点击校验</h-button>
  </h-form>

  <br />
  <hr />

  <!-- upload组件 -->
  <h-upload multiple :before-upload="handleBeforeUpload" action="http://localhost:4000/upload">
    <h-button type="success">click to upload</h-button>
  </h-upload>
</template>

<script setup lang="ts">
import { Key, TreeOptions } from "@uuio/components/tree/src/tree";
import { Accessibility } from "@vicons/ionicons5";
import HIcon from "../../packages/components/icon";
import { reactive, ref } from "vue";
import { UploadRawFile } from "@uuio/components/upload";
//存储选中的节点
const selectedValue = ref<Key[]>(["40", "41"]);

//第一颗树
function createData(level = 4, parentKey = ""): any {
  if (!level) return [];
  const arr = new Array(20 - level).fill(0);
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx;
    return {
      //
      xxx: createLabel(level),
      key,
      children: createData(level - 1, key),
    };
  });
}
function createLabel(level: number): string {
  if (level === 4) return "mingzhe";
  if (level === 3) return "ma";
  if (level === 2) return "3";
  if (level === 1) return "4";
  return "";
}

//第二颗树
function createData2() {
  return [
    {
      // 因为这里只传了data，所以这三个属性不能写错
      label: nextLabel(),
      treeKey: 1,
      isLeaf: false,
    },
    {
      label: nextLabel(),
      treeKey: 2,
      isLeaf: false,
    },
  ];
}
function nextLabel(currentLabel?: string | undefined | number): string {
  if (!currentLabel) return "first a";
  if (currentLabel === "first a") return "second a";
  if (currentLabel === "second a") return "third a";
  if (currentLabel === "third a") {
    return "fourth a";
  }
  if (currentLabel === "fourth a") {
    return "that is all";
  }
  return "";
}
//展开需要的事件
const delay: number = 1000;
const handleLoad = (node: TreeOptions) => {
  return new Promise<TreeOptions[]>((resolve) => {
    setTimeout(() => {
      resolve([
        //当前展开的node的children属性
        {
          label: nextLabel(node.label),
          treeKey: node.treeKey + nextLabel(node.label),
          isLeaf: false,
          disabled: false,
        },
      ]);
    }, delay);
  });
};

const data = ref(createData());
const data2 = ref(createData2());
console.log(data2, "d2");
//第三颗树
const data3 = ref<TreeOptions[]>([
  {
    treeKey: "0",
    label: "0",
    children: [
      {
        treeKey: "0-0",
        label: "0-0",
      },
      {
        disabled: true,
        treeKey: "0-1",
        label: "0-1",
        children: [
          {
            label: "0-1-0",
            treeKey: "0-1-0",
          },
          {
            label: "0-1-1",
            treeKey: "0-1-1",
          },
        ],
      },
    ],
  },
]);

// checkbox的数据
const check = ref(true);

const handleChange = (val: boolean) => {
  console.log(val + " changed!!!");
};

//button组件部分

//点击事件
const handleClick = () => {
  console.log("click");
};

//input组件部分
const inputWords = ref("hello world");
const handleBlur = (e: FocusEvent) => {
  console.log("blur", e);
};
const handleFocus = (e: FocusEvent) => {
  console.log((e.target as HTMLInputElement).value);
};

//form组件部分
const state = reactive({ username: "", password: "" });

const formRef = ref();
const validateForm = () => {
  const form = formRef.value;
  form?.validate((valid, error) => {
    console.log(valid, error);
  });
};
//upload组件部分
const handleBeforeUpload = (rawFile:UploadRawFile)=>{
  return true
}
</script>

<style></style>

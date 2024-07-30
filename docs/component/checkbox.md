# Checkbox 多选框
在一组备选项中进行多选。

## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
<h-checkbox
    v-model:modelVal="check"
    :disabled="false"
    :indeterminate="false"
    label="ma"
    @change="handleChange"
    >option
</h-checkbox>
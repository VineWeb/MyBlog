<template>
    <el-form :model="form" label-width="110px" :inline="true" ref="formQuery" @keyup.enter="query">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="性别" prop="gender" >
        <el-select v-model="form.gender" placeholder="请选择性别">
          <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="form.age" placeholder="请输入年龄" />
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入联系方式" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱" />
      </el-form-item>
    </el-form>
    <div style="margin: 10px 0;">form的值：{{ form }}</div>
    <div class="dialog-footer">
      <el-button @click="query" type="primary">查询</el-button>
      <el-button @click="reset(formQuery)" type="info">重置</el-button>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { FormInstance } from "element-plus";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const isShow = ref(props.show);
const formQuery = ref<FormInstance>();
const options = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
]
const emits = defineEmits(["query"]);
watch(
  () => props.show,
  (val) => {
    isShow.value = val;
  },
);
const form = reactive({
  name: "",
  age: "",
  phone: "",
  email: "",
  gender: "",
});

const query = () => emits("query")
const reset = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
defineExpose({
  form,
  query,
  reset,
  formQuery,
});
</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  width: 240px;
}
</style>

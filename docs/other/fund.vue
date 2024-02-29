<template>
  <el-form :model="form" label-width="140px" class="fund">
   <el-form-item label="账户余额(元)">
     <el-input v-model="form.balances" />
   </el-form-item>
   <el-form-item label="月缴存额(元)">
    <el-input v-model="form.deposit" />
   </el-form-item>
   <el-form-item label="到退休年龄年数(年)">
    <el-input v-model="form.years" />
   </el-form-item>
   <h3>贷款额度: {{ count }} (元)</h3>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
const form = reactive({
  balances: 0,
  deposit: 210,
  years: 1
})
const count = computed(() => {
  const { balances, deposit, years } = form
  const total = balances * 8 +  deposit * years * 12
  return total
})
// 账户余额×8+月缴存额×到退休年龄月数
</script>

<style lang="scss" scoped>
  .fund {
    padding: 20px 0;
  }
</style>
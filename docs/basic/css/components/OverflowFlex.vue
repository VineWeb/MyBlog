<template>
  <div class="page-container">
    <div class="search-top">
      <el-input
      v-model="keyword"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
    </div>
    <div class="tag">
      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
    </div>
    <div class="table-body">
      <!-- height="100%" 为了固定表头 -->
      <el-table :data="tableData" height="100%" style="width: 100%">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue'
const keyword = ref('')
const select = ref('1')
const tableData = Array.from({length: 20}, (v, i) => {
  return {
    date: `2016-05-${3+i > 9 ? 3+i : '0'+(3+i)}`,
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  }
})
const handleClick = () => {
  console.log('click')
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 800px;
  background-color: pink;
  padding: 12px;
  display: flex;
  flex-direction: column;
  .tag {
    margin: 20px 0;
    .item {
      margin-right: 10px;
    }
  }
  .table-body {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
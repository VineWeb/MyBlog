<template>
  <div class="demo-image__preview">
    <el-image
      class="show-img"
      :src="url"
      :zoom-rate="1"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="[url]"
      :initial-index="4"
      fit="cover"
    />
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import emptyImg from '../images/empty.png'
defineProps({
  url: {
    type: String,
    default: emptyImg
  }
})
</script>

<style scoped>
.show-img {
  margin-top: 10px;
  width: 100%; 
  height: auto
}
.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>

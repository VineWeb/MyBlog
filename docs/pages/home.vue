<template>
  <div class="home">
    <el-carousel trigger="click" height="150px" type="card" :interval="5000">
      <el-carousel-item v-for="item in showList" :key="item" @click="goto(item.path)">
        <h3 class="flex justify-center items-center" text="2xl">{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-divider border-style="dashed" />
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>近期博文</span>
            </div>
          </template>
          <p v-for="(b, i) in blogList" :key="i" >
            <el-link :href="b.link" :underline="false" target="_self">{{ b.text }}</el-link>
          </p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const origin = location.origin + '/MyBlog'
const showList = ref([
  { name: 'Vue', id: '1', path: `${origin}/web/vue/` },
  { name: 'React', id: '2', path: `${origin}/web/react/` },
  { name: 'Node', id: '3', path: `${origin}/web/node/` },
])

const goto = (path: string) => {
  console.log(path, 'path')
  window.open(path, '_self')
}

const blogList = [
  {
      text: "Mapbox入门",
      link: `${origin}/interview/examinations/mapbox.html`
  },
  {
      text: "Elecron入门",
      link: `${origin}/interview/examinations/electron.html`
  },
  {
      text: "掌握常用的 npm 命令：简化你的项目管理",
      link: `${origin}/web/npm的使用.html`
  },
  {
      text: "Nginx 了解正向代理和反向代理以及配置示例",
      link: `${origin}/web/Nginx的使用.html`
  },
]
</script>

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
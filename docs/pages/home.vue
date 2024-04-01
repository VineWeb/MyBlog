<template>
  <div class="blog clearfix">
      <el-row class="content" :gutter="20">
        <el-col class="main">
          <el-form label-width="auto" style="max-width: 600px" label-position="right">
          <el-form-item label="个人站点：">
            <a href="https://chenjinbo.cn" target="_blank">https://chenjinbo.cn</a>
          </el-form-item>
          <el-form-item label="Github：">
            <a href="https://github.com/VineWeb" target="_blank">https://github.com/VineWeb</a>
          </el-form-item>
          <el-form-item label="邮箱地址：">
            <el-input value="vineweb@163.com" />
          </el-form-item>
          </el-form>
          <el-collapse v-model="activeNames">
            <el-collapse-item title="HTML基础：" name="1">
              <div> 熟悉HTML5新增标签，属性，及其语义化特性； </div>
            </el-collapse-item>
            <el-collapse-item title="CSS基础：" name="2">
              <div>熟悉CSS3新增属性及特性，熟练使用Flex弹性布局实现复杂的页面布局以及交互，熟悉过渡、动画、requestAnimationFrame的属性，并实现复杂的动画交互效果；</div>
            </el-collapse-item>
            <el-collapse-item title="可视化/响应式/GIS基础：" name="3">
              <div>熟悉使用Mapbox，Echarts，Lodash，Axios等js库，对媒体查询、rem、vw、flex编写布局都有大量的实际应用。</div>
            </el-collapse-item>
            <el-collapse-item title="JS基础：" name="4">
              <div>熟悉javascript语法、BOM、DOM对象，面向对象开发，理解闭包含义，封装底层工具方法，掌握Promise异步编程，进行模块化开发等；</div>
            </el-collapse-item>
            <el-collapse-item title="Vue框架：" name="5">
              <div>掌握vue2.x-3.x熟悉其框架核心思想，掌握周边生态vue-router、vuex、element-ui/plus、pinia的使用，可依托框架实现以数据为主的SPA应用；</div>
            </el-collapse-item>
            <el-collapse-item title="React框架：" name="6">
              <div>掌握react16-18，熟悉类组件和函数组件开发，掌握周边生态react-router-dom、react-redux、antd的使用，可编写业务组件化，模块组件化的项目应用；</div>
            </el-collapse-item>
            <el-collapse-item title="小程序基础：" name="7">
              <div>熟练掌握微信公众号、小程序原生开发，mpvue和uniapp开发，实现多个小程序应用，微信小程序搜索：村村拍、圆猿买手，圆猿接单、墨香诗词。</div>
            </el-collapse-item>
            <el-collapse-item title="Nodejs基础：" name="8">
              <div>具备对Express和Node.js的实际应用经验，能够实现前后端分离的全栈开发；并应用与自己的个人站点和小程序。</div>
              <div>项目地址：https://chenjinbo.cn    个人博客：https://vineweb.github.io/MyBlog</div>
              <div>微信小程序搜索：墨香诗词</div>
            </el-collapse-item>
            <el-collapse-item title="自动化基础：" name="9">
              <div>熟练使用Webpack、Vite等自动化构建工具，搭建高效的前端开发环境，结合jenkins或者github的Actions实现CI/CD自动化。</div>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeNames = ref(['1', '2', '3', '4', '5', '6'])
</script>

<style lang="scss" scoped>
.blog {
  background-color: #f5e9d3;
  padding-top: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;
  margin-bottom: 10px;
  .content {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 80px;
    .main {
      width: 100%;
      flex: 1;
      margin: 0 auto;
      padding: 50px;
      background-color: #fff;
      min-height: auto;
    }
    .sidebar {
      width: 260px;
      padding: 20px;
      box-sizing: border-box;
      .welcome {
        margin-bottom: 5px;
        color: #a25158;
      }
    }
  }
}
.clearfix {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}
:deep(.el-collapse-item__header) {
  font-weight: bolder;
}
</style>
<!-- 具名插槽 -->
<template>
  <div class="container">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <p>默认的内容</p>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>

    <!-- 
      <template v-slot:[dynamicSlotName]>
      ...
      </template>
    -->

    <!-- 缩写为 -->
    <!--
      <template #[dynamicSlotName]>
      ...
      </template>
    -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
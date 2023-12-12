<template>
  <div>
    <div>
      <h3>这是默认的Slot: </h3>
      <mySlots>这是我的传入的内容</mySlots>
      <mySlots></mySlots>
    </div>

  <div>
    <h3>具名的Slot: </h3>
    <nameSlots>
      <template v-slot>这是中间的</template>
      <template v-slot:header>这是头部</template>
      <template #footer>这是尾部的</template>
    </nameSlots>
  </div>
  <div>
    <h3>作用域的Slot: </h3>
    <scopeSlots>
      <template v-slot="slotProps">
        <p>作用域的text: {{ slotProps.text }}</p>
        <p>作用域的Count: {{ slotProps.count }}</p>
      </template>
    </scopeSlots>
  </div>
  </div>
</template>

<script setup lang="ts">
import mySlots from './mySlots.vue';
import nameSlots from './nameSlots.vue';
// @ts-ignore
import scopeSlots from './scopeSlots.vue';
</script>

<style scoped>

</style>
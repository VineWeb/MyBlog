<template>
  <div class="vc-index">
    <el-tag
      class="mr-4"
      v-for="item in tags"
      :key="item.id"
      :type="item.type"
      >{{ item.name }}</el-tag
    >
    <!-- <el-col class="mt-8 poetry"> 每日歌词：{{ poetryItem?.content }}</el-col> -->
    <div id="text-container" class="mt-8 poetry">
      <div ref="textRef" id="text">
        <p v-for="(p, pIndex) in pList" :key="pIndex">{{ p }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
const tags = [
  { id: nanoid(), name: "代码", type: "" },
  { id: nanoid(), name: "生活", type: "success" },
  { id: nanoid(), name: "学习", type: "warning" },
  // { id: nanoid(), name: "时事", type: "info" },
  // { id: nanoid(), name: "看书", type: "danger" },
];
const textContent = `遗憾呀，可能是某个少年做了很调皮的事情，在某个午后一天做了一件很开心的事情发现想分享给某个人却永远分享不了才恍然失神，也可能是小时候很喜欢吃的食物长大再吃时候却味同嚼蜡。|或许，我们每个人的生命中都会有一些让人觉得惋惜的瞬间，一些无法逆转的时刻,那个曾经的少年，脑海中或许永远留存着那个开心的瞬间，那份真挚的情感却再也找不到一个能够分享的对象。这种遗憾，仿佛是时光的无情调皮，将我们的美好瞬间藏在了岁月的深处，让我们在回忆时只能自顾自地微笑。|小时候，那些让味蕾欢愉的食物是我们童年的味道，是那个时候的甜蜜和纯真。然而，随着时间的推移，当我们再度品尝这些美味时，却发现原本的美好早已不复存在。或许是食材的变化，或许是味觉的改变，那曾经的美味如今却只剩下淡淡的遗憾。在舌尖上，曾经的独特滋味如同一幅美丽的画卷，被岁月的风尘抹去了它的绚烂色彩。这些遗憾，有时候是我们生活中不可避免的一部分。它们或许是时光流逝的自然产物，亦或是我们自己创造的一段过往。然而，正是这些遗憾，给予了我们更多对生活的思考和体验。或许，正是因为有了遗憾，我们才更加珍惜那些瞬间的美好，更加用心地品味生活的酸甜苦辣。|在这个喧嚣的世界中，遗憾有如悄悄流淌的溪水，将我们的心事轻轻带走。它们或许藏在岁月的深巷，或许埋在梦的彼岸, 然而，正是这些遗憾，成就了我们独特的人生，让我们的故事更加丰富多彩, 或许，我们需要学会接受遗憾，因为正是这些遗憾，让生命的旅程变得更加生动有趣。所以，当我们在回首过去的时候，或许不妨微笑着接纳那些遗憾。因为在遗憾的背后，往往隐藏着更多未知的可能。让遗憾成为生命的一部分，让它们像星空中的流星一样，划过天际，留下美好的痕迹。|遗憾呀，或许正是这份不舍和遗憾，让我们的生命变得更加绚丽多彩。`;
const animaetdText = ref("");
let currentCharIndex = ref(0);
let index = ref(1);
let pIndex = ref(0)
let pList = ref([])
const textRef = ref(null)
const animateText = () => {
  if (index.value <= textContent.length) {
    const currentChar = textContent[index.value]
    pList.value[pIndex.value] = (pList.value[pIndex.value] ?? '') + (textContent.slice(currentCharIndex.value, index.value))
    if (currentChar === '|') {
      // pList.value[pIndex.value] = (pList.value[pIndex.value] ?? '') + currentChar
      currentCharIndex.value ++ 
      index.value++;
      pIndex.value++
    }
    currentCharIndex.value ++ 
    index.value++;
    setTimeout(() => {
      animateText();
    }, 100);
  } else {
    setTimeout(() => {
      flashText();
    }, 60 * 60 * 1000);
  }
};
const flashText = () => {
  pIndex.value = 0
  currentCharIndex.value = 0
  index.value = 1
  pList.value = []
  animateText()
  // 样式的变动
  let isVisible = true;
  const toggleVisibility = () => {
    isVisible = !isVisible;
    // textRef.value.style.color = isVisible ? "#000" : "transparent";
  };
  const simulateSetInterval = (callback, interval) => {
    function execute() {
      callback();
      setTimeout(execute, interval);
    }
    setTimeout(execute, interval)
  }
  // simulateSetInterval(toggleVisibility, 5000); // 
};

// 在组件挂载后，初始化 formPoetry 的值为随机项的值
onMounted(() => {
  animateText()
});
</script>

<style lang="scss" scoped>
.poetry {
  font-weight: bold;
  background: linear-gradient(45deg, #ff0, #99ccff); /* 渐变背景颜色 */
  background-clip: text; /* 文字裁剪为渐变 */
  -webkit-background-clip: text; /* Safari 支持 */
  color: transparent; /* 隐藏原始文字颜色 */
  mix-blend-mode: difference; /* 使用混合模式 */
  animation: lyricsAnimation 5s linear infinite; /* 添加动画效果 */
  background-size: 200% 200%; /* 背景大小为文字的两倍 */
}
/* 定义动画的关键帧 */
@keyframes lyricsAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
#text-container {
  text-align: left;
}

#text {
  text-indent: 2em;
  display: flex;
  flex-wrap: wrap;
  min-height: 24px;
  visibility: visible;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  border-right: 2px solid #000;
}
</style>

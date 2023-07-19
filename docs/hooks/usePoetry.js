import { ref, onMounted, computed } from 'vue';
export async function fetchData() {
  try {
    const response = await fetch('../json/poetry.json');
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return [];
  }
}
export function useRandomItem() {
  const data = ref([]);
  const poetryItem = computed(() => {
    const randomIndex = Math.floor(Math.random() * data.value.length);
    return data.value[randomIndex];
  })
  // 使用 onMounted 钩子在组件挂载后读取本地 JSON 文件
  onMounted(async () => {
    data.value = await fetchData();
  });

  // 定义一个函数用于随机返回数组中的任意一项
  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * data.value.length);
    return data.value[randomIndex];
  }

  // 返回需要暴露的数据和函数
  return {
    data,
    getRandomItem,
    poetryItem
  };
}

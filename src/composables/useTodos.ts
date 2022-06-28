import { onMounted, ref } from "vue";


const useTodos = () => {
  const listData = ref([]);
  const handleClick = (value) => {
    listData.value.push(value);
  };
  return{handleClick,listData}
}

export default useTodos


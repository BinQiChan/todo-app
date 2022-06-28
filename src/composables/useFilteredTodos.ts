import { computed, ref } from "vue";



const useFilteredTodos = (listData) => {
  const selected = ref("all");
  const todoLists = computed(() => {
console.log(selected.value);
    switch (selected.value) {
      
      case "done":
        return listData.value.filter((item) => item.completed);
      case "todo":
        return listData.value.filter((item) => !item.completed);
      default:
        return listData.value;
    }
  });
  return{ selected,todoLists}
}

export default useFilteredTodos

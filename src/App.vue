<template>
  <main>
    <div class="container">
      <h1>todo-app 待办事项！</h1>
      <todo-add @handleClick="handleClick" />
      <todo-filter @handleChecked=" selected=$event.value" :selected="selected" />
      <todo-list :listData="todoLists" />
    </div>
  
  </main>
  <router-view />
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
import useFilteredTodos from "../src/composables/useFilteredTodos";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import useTodos from "./composables/useTodos";



const {handleClick,listData }=useTodos()


const  { selected,todoLists}=useFilteredTodos(listData)
// const todoLists = computed(() => {

//   switch (selected.value) {
//     case "done":
//       return listData.value.filter((item) => item.completed);
//     case "todo":
//       return listData.value.filter((item) => !item.completed);
//     default:
//       return listData.value;
//   }
// });

</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: #d8dfff;
}

.container {
  width: 60%;
  max-width: 400px;

  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>

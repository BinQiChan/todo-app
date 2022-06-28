<template>
  <div class="todo-list">

    <todo-list-item
    v-for="list in listData"
    :list="list"
    @handleCompleted="list.completed=$event.target.checked"
    :key="Math.random()"
    ></todo-list-item>
  </div>
</template>


<script lang="ts" setup>
import { ref } from "vue" 
import TodoListItem from "./TodoListItem.vue";
const props=defineProps(['listData'])
console.log(props);

</script>



<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>

<template>
  <div class="todo-item" :class="{ done:list.completed }" >
    <label>
      <input
        type="checkbox"
     :checked="list.completed"
     @click="$emit('handleCompleted',$event)"/>
     
   {{list.content}}
      <span class="check-button"></span>
    </label>
  </div>
</template>



<script lang="ts" setup>
import { ref } from "vue" 
 defineProps(['list'])

defineEmits(['handleCompleted'])

</script>



<style>
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
</style>

<template>
  <div class="filters" >
    <span
     
     v-for=" filter in filters" :key="filter.value"
     :class="{active:filter.value===selected}"
      class="filter"
    @click="$emit('handleChecked',filter)"
      >{{filter.label}}</span
    >
    
  
  </div>
</template>


<script lang="ts" setup>
import { ref } from "vue" 
 const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
    ];
    defineEmits(['handleChecked'])
    defineProps(['selected'])
</script>



<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
  cursor: pointer;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>

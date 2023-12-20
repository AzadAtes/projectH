<script setup lang="ts">

import TaskItem from "./TaskItem.vue";
</script>

<template>
<ul>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
  <TaskItem/>
</ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 10px;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
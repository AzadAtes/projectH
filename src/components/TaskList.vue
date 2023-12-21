<script setup lang="ts">
  import TaskItem from "./TaskItem.vue";
</script>

<template>
  <ul>
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <TaskItem />
  </ul>
</template>

<style scoped>
  ul {
    list-style-type: none;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  /*
    @media only screen and (min-width: 601px) {
      margin: 50px;
      gap: 15px;
    }
  }
  */
</style>

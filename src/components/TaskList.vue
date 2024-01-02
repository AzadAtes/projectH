<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import { useTaskStore } from "../stores/taskStore.ts";
const taskStore = useTaskStore();
</script>

<template>
	<ul id="task-list" class="flex list-none flex-col gap-4">
		<TaskItem v-for="task in taskStore.tasks" :task="task" :key="task.id" />
	</ul>
</template>

<style scoped></style>

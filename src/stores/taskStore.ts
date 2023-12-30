import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
	const tasks = ref<Task[]>([
		{ id: "1", task: "task 1" },
		{ id: "2", task: "task 2" },
		{ id: "3", task: "task 3" },
		{ id: "4", task: "task 4" },
		{ id: "5", task: "task 5" },
		{ id: "6", task: "task 6" },
	]);

	return { tasks };
});

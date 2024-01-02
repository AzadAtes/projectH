import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
	const tasks = ref<Task[]>([
		{
			id: "1",
			name: "This is my very first Task. Its kinda long..",
			description:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
			dueDateAndTime: "Today 15:45",
			subTasks: [
				{
					id: "s111",
					name: "SubTask 1. This is my very first SubTask.",
					subSubTasks: [
						{
							id: "s111",
							name: "SubSubTask 1. This is my very first SubSubTask.",
						},
						{
							id: "s112",
							name: "SubSubTask 2. This is my second SubSubTask.",
						},
					],
				},
				{
					id: "s112",
					name: "SubTask 2. This is my very second SubTask.",
				},
			],
		},
		{
			id: "2",
			name: "This is my very second Task.",
			description:
				"This is a very long and precise description of the task at hand.",
			dueDateAndTime: "Tomorrow 15:45",
			subTasks: [
				{
					id: "s121",
					name: "SubTask 1",
				},
			],
		},
		{ id: "3", name: "task 3" },
		{ id: "4", name: "task 4" },
		{ id: "5", name: "task 5" },
		{ id: "6", name: "task 6" },
	]);

	return { tasks };
});

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
	const tasks = ref<Task[]>([
		{
			id: "1",
			name: "This is my very first Task. Its kinda long..",
			description:
				"The push-up (press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole.[1] Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training.",
			dueDateAndTime: "Today 15:45",
			subTasks: [
				{
					id: "s111",
					name: "SubTask 1. This is my very first SubTask.",
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

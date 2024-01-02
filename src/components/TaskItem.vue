<script setup lang="ts">
import { PropType, ref } from "vue";
import SubTask from "./SubTaskItem.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});

const subTasksAreShown = ref(false);

const toggleShowSubTasks = () => {
	subTasksAreShown.value = !subTasksAreShown.value;
};
</script>

<template>
	<li id="task-item" class="rounded-xl shadow-lg">
		<div
			id="task-item-header"
			class="flex w-full cursor-pointer items-center bg-red p-2 shadow"
			:class="
				subTasksAreShown &&
				(props.task.subTasks !== undefined ||
					props.task.description !== undefined)
					? 'rounded-t-xl'
					: 'rounded-xl'
			"
			@click="toggleShowSubTasks"
		>
			<input type="checkbox" class="m-2 h-6 w-6" @click.stop />
			<div id="task-item-headline" class="flex gap-2 text-2xl">
				<p>{{ props.task.dueDateAndTime + ":" }}</p>
				<p>{{ props.task.name }}</p>
			</div>
		</div>
		<div
			id="task-item-content"
			class="flex flex-col gap-4 rounded-b-xl bg-neutral-dark p-4"
			v-show="subTasksAreShown"
		>
			<p id="task-item-description">{{ props.task.description }}</p>
			<ul id="sub-task-list" class="flex list-none flex-col gap-4">
				<SubTask
					v-for="subTask in props.task.subTasks"
					:sub-task="subTask"
				/>
			</ul>
		</div>
	</li>
</template>

<style scoped></style>

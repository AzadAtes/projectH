<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import SubTask from "./SubTaskItem.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});

const subTasksAreShown = ref(false);

const hasDescription = computed(() => {
	return props.task.description !== "";
});
const toggleShowSubTasks = () => {
	subTasksAreShown.value = !subTasksAreShown.value;
};
</script>

<template>
	<li id="task-item" class="rounded shadow-lg">
		<div
			id="task-item-header"
			class="bg-blueish flex w-full cursor-pointer items-center gap-4 p-2"
			:class="
				subTasksAreShown &&
				(props.task.subTasks !== undefined ||
					props.task.description !== undefined)
					? 'rounded-t-xl bg-neutral-dark'
					: 'bg-blueish rounded shadow'
			"
			@click="toggleShowSubTasks"
		>
			<input
				type="checkbox"
				id="task-item-checkbox"
				class="m-0 h-5 w-5 p-0 accent-green-400"
				@click.stop
			/>

			<div id="task-item-headline" class="flex gap-2 text-2xl">
				<p>{{ props.task.dueDateAndTime + ":" }}</p>
				<p>{{ props.task.name }}</p>
			</div>
		</div>
		<div
			id="task-item-content"
			class="flex flex-col gap-5 rounded-b-xl bg-neutral-light p-4"
			v-show="subTasksAreShown"
		>
			<p id="task-item-description" v-if="hasDescription">
				{{ props.task.description }}
			</p>
			<ul id="sub-task-list" class="ml-6 flex list-none flex-col gap-5">
				<SubTask
					v-for="subTask in props.task.subTasks"
					:sub-task="subTask"
				/>
			</ul>
		</div>
	</li>
</template>

<style scoped></style>

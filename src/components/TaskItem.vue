<script setup lang="ts">
import { PropType, ref } from "vue";
import SubTask from "./SubTaskItem.vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});
const toggleShowSubTasks = () => {
	subTasksAreShown.value = !subTasksAreShown.value;
};

const subTasksAreShown = ref(false);
</script>

<template>
	<li>
		<div class="rounded-xl shadow-lg">
			<div
				class="bg-red flex w-full cursor-pointer items-center p-2 shadow"
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
				<div class="flex gap-2 text-2xl">
					<p>{{ props.task.dueDateAndTime + ":" }}</p>
					<p>{{ props.task.name }}</p>
				</div>
			</div>
			<div class="rounded-b-xl bg-neutral-dark" v-show="subTasksAreShown">
				<p>{{ props.task.description }}</p>
				<div v-for="subTask in props.task.subTasks">
					<SubTask :sub-task="subTask" />
				</div>
			</div>
		</div>
	</li>
</template>

<style scoped></style>

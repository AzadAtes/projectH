<script setup lang="ts">
import { PropType, ref } from "vue";
import SubSubTaskItem from "./SubSubTaskItem.vue";

const props = defineProps({
	subTask: {
		type: Object as PropType<SubTask>,
		required: true,
	},
});

const subSubTasksAreShown = ref(false);

const toggleShowSubSubTasks = () => {
	subSubTasksAreShown.value = !subSubTasksAreShown.value;
};
</script>

<template>
	<li id="sub-task-item" class="rounded shadow-lg">
		<div
			id="sub-task-item-header"
			class="flex cursor-pointer items-center p-1"
			:class="
				subSubTasksAreShown && props.subTask.subSubTasks !== undefined
					? 'rounded-t-xl bg-neutral-dark'
					: 'bg-blueish rounded shadow'
			"
			@click="toggleShowSubSubTasks"
		>
			<input type="checkbox" class="m-2 h-4 w-4" @click.stop />
			<div id="sub-task-item-headline" class="flex gap-1 text-2xl">
				<p>{{ props.subTask.name }}</p>
			</div>
		</div>

		<div
			id="sub-task-item-content"
			class="flex flex-col gap-4 rounded-b-xl bg-neutral-light"
			v-show="subSubTasksAreShown"
		>
			<ul
				id="sub-sub-task-list"
				class="ml-6 flex list-none flex-col gap-3 p-3"
			>
				<SubSubTaskItem
					v-show="subSubTasksAreShown"
					v-for="subSubTask in props.subTask.subSubTasks"
					:key="subSubTask.id"
					:sub-sub-task="subSubTask"
				/>
			</ul>
		</div>
	</li>
</template>

<style scoped></style>

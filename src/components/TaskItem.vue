<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
	task: {
		type: Object as PropType<Task>,
		required: true,
	},
});
</script>

<template>
	<li>
		<button class="w-full bg-red-500">{{ props.task.task }}<slot /></button>
	</li>
</template>

<style scoped></style>

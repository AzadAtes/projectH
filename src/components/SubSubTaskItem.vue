<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
	subSubTask: {
		type: Object as PropType<SubSubTask>,
		required: true,
	},
});
</script>

<template>
	<li
		class="flex cursor-pointer gap-2 rounded bg-neutral-dark p-1 pl-2 shadow"
	>
		<input type="checkbox" @click.stop />
		<p>{{ props.subSubTask.name }}</p>
	</li>
</template>

<style scoped></style>

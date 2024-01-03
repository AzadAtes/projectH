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
	<li class="flex cursor-pointer gap-2 rounded bg-blueish p-1 pl-2 shadow-lg">
		<input type="checkbox" class="accent-green-400" @click.stop />
		<p>{{ props.subSubTask.name }}</p>
	</li>
</template>

<style scoped></style>

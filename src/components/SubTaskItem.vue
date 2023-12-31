<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
	subTask: {
		type: Object as PropType<SubTask>,
		required: true,
	},
});
</script>

<template>
	<div class="bg-red flex w-fit gap-2 rounded-xl p-2">
		<input type="checkbox" @click.stop />
		<p>{{ props.subTask.name }}</p>
	</div>
</template>

<style scoped></style>

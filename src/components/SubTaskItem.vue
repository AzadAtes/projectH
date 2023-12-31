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
	<div class="w-fit bg-main-bg-color">
		<p>{{ props.subTask.name }}</p>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import TopPanel from "./components/TopPanel.vue";
</script>

<template>
	<div
		id="header-wrapper"
		class="bg-dark h-header fixed left-0 top-0 flex w-full justify-center shadow-2xl"
	>
		<div id="header" class="flex flex-1 p-4">
			<TopPanel />
		</div>
	</div>
	<div id="main-wrapper" class="mt-header flex w-full justify-center">
		<div id="main" class="min-w-main max-w-main w-full flex-1 p-4">
			<RouterView />
		</div>
	</div>
</template>

<style scoped></style>

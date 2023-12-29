<script setup lang="ts">
import MenuIcon from "./icons/MenuIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SettingsIcon from "./icons/SettingIcon.vue";
import ArrowBackIcon from "./icons/ArrowBack.vue";
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

const OVERLAY_THRESHOLD = 600;
const screenWidth = ref(window.innerWidth);
const searchBar = ref<HTMLInputElement | null>(null);
const searchBarIsFocused = ref(false);
const searchBarOverlayIsActive = ref(false);

const handleSearchBarFocus = () => {
	searchBarIsFocused.value = true;
};

const handleSearchBarBlur = () => {
	searchBarIsFocused.value = false;
};

const activateSearchBarOverlay = () => {
	searchBarOverlayIsActive.value = true;
};

const deactivateSearchBarOverlay = () => {
	searchBarOverlayIsActive.value = false;
};

const activateSearchBarOverlayAndFocus = () => {
	activateSearchBarOverlay();
	nextTick(() => {
		searchBar.value?.focus();
	});
};

watch([screenWidth, searchBarIsFocused], () => {
	searchBarOverlayIsActive.value =
		screenWidth.value < 600 && searchBarIsFocused.value;
});

const updateScreenWidth = () => {
	screenWidth.value = window.innerWidth;
};
onMounted(() => {
	window.addEventListener("resize", updateScreenWidth);
});
onBeforeUnmount(() => {
	window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
	<div id="top-panel" class="flex flex-1 justify-center gap-10">
		<div
			id="top-panel-left-section"
			class="flex-200px flex items-center justify-start gap-4"
			v-if="!searchBarOverlayIsActive"
		>
			<MenuIcon class="h-9 w-9" />
			<p class="relative bottom-0.5 text-2xl">Important</p>
		</div>

		<div
			id="top-panel-middle-section"
			class="max-w-900px flex-900px flex items-center justify-center"
		>
			<ArrowBackIcon
				id="arrow-back-icon"
				class="h-8 w-8"
				v-if="searchBarOverlayIsActive"
				@click="deactivateSearchBarOverlay"
			/>
			<div
				id="search-bar"
				ref="lol"
				class="flex h-8 w-8 flex-1 items-center justify-center rounded-3xl border border-neutral-light"
				v-if="
					screenWidth > OVERLAY_THRESHOLD || searchBarOverlayIsActive
				"
			>
				<input
					id="search-bar-input"
					class="ml-3 w-full flex-1 bg-neutral-dark text-lg outline-none"
					ref="searchBar"
					@focus="handleSearchBarFocus"
					@blur="handleSearchBarBlur"
				/>
				<div
					id="search-bar-icon-wrapper"
					class="flex h-8 w-12 items-center justify-center rounded-r-3xl bg-neutral-light"
				>
					<SearchIcon
						class="h-6 w-6 fill-current text-neutral-dark"
					/>
				</div>
			</div>
		</div>

		<div
			id="top-panel-right-section"
			class="flex-200px flex items-center justify-end gap-4"
			v-if="!searchBarOverlayIsActive"
		>
			<div
				id="search-icon-wrapper"
				class="flex h-8 w-12 items-center justify-center rounded-3xl bg-neutral-light p-1"
				v-if="screenWidth <= OVERLAY_THRESHOLD"
				@click="activateSearchBarOverlayAndFocus"
			>
				<SearchIcon class="h-6 w-6 fill-current text-neutral-dark" />
			</div>
			<div
				id="settings-icon-wrapper"
				class="flex h-8 w-8 items-center justify-center rounded-3xl bg-neutral-light p-1"
			>
				<SettingsIcon class="h-6 w-6 fill-current text-neutral-dark" />
			</div>
		</div>
	</div>
</template>

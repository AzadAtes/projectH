<script setup lang="ts">
import MenuIcon from "./icons/MenuIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SettingsIcon from "./icons/SettingIcon.vue";
import ArrowBackIcon from "./icons/ArrowBack.vue";
import CloseIcon from "./icons/close.vue";
import {
	ref,
	onMounted,
	onBeforeUnmount,
	nextTick,
	watch,
	computed,
} from "vue";

const OVERLAY_THRESHOLD = 600;
const screenWidth = ref(window.innerWidth);
const searchBarInput = ref<HTMLInputElement | null>(null);
const searchBarInputText = ref("");
const searchBarIsFocused = ref(false);
const searchBarOverlayIsActive = ref(false);

const handleSearchBarFocus = () => {
	searchBarIsFocused.value = true;
};

const handleSearchBarBlur = () => {
	searchBarIsFocused.value = false;
	if (searchBarInputText.value === "") {
		searchBarOverlayIsActive.value = false;
	}
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
		searchBarInput.value?.focus();
	});
};

const clearSearchBarInputAndFocus = () => {
	searchBarInputText.value = "";
	nextTick(() => {
		searchBarInput.value?.focus();
	});
};

const searchBarInputHasText = computed(() => {
	return searchBarInputText.value !== "";
});

watch([screenWidth], () => {
	searchBarOverlayIsActive.value =
		screenWidth.value < OVERLAY_THRESHOLD &&
		(searchBarIsFocused.value || searchBarInputText.value !== "");
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
	<div
		id="top-panel"
		class="flex flex-1 justify-center"
		:class="{
			'gap-10': screenWidth > OVERLAY_THRESHOLD,
			'gap-20': screenWidth > OVERLAY_THRESHOLD * 1.5,
		}"
	>
		<div
			id="top-panel-left-section"
			class="flex flex-200px items-center justify-start gap-4"
			v-if="!searchBarOverlayIsActive"
		>
			<MenuIcon class="h-9 w-9 text-main-color" />
			<p class="relative bottom-0.5 text-2xl text-main-color">
				Important
			</p>
		</div>

		<div
			id="top-panel-middle-section"
			class="flex max-w-900px flex-900px items-center justify-center"
		>
			<ArrowBackIcon
				id="arrow-back-icon"
				class="h-8 w-8 text-main-color"
				v-if="searchBarOverlayIsActive"
				@click="deactivateSearchBarOverlay"
			/>
			<div
				id="search-bar"
				class="flex h-8 w-8 flex-1 items-center justify-center rounded-3xl border border-main-color"
				v-if="
					screenWidth > OVERLAY_THRESHOLD || searchBarOverlayIsActive
				"
			>
				<input
					id="search-bar-input"
					class="bg-top-bar ml-3 w-full flex-1 text-lg placeholder-main-color outline-none"
					ref="searchBarInput"
					v-model="searchBarInputText"
					placeholder="search.."
					@focus="handleSearchBarFocus"
					@blur="handleSearchBarBlur"
				/>
				<CloseIcon
					class="h-8 w-8 fill-current"
					v-if="searchBarInputHasText"
					@click="clearSearchBarInputAndFocus"
				/>
				<div
					id="search-bar-icon-wrapper"
					class="flex h-8 w-12 items-center justify-center rounded-r-3xl bg-main-color"
				>
					<SearchIcon
						class="h-6 w-6 fill-current text-main-bg-color"
					/>
				</div>
			</div>
		</div>

		<div
			id="top-panel-right-section"
			class="flex flex-200px items-center justify-end gap-4"
			v-if="!searchBarOverlayIsActive"
		>
			<div
				id="search-button-wrapper"
				class="flex h-8 w-12 items-center justify-center rounded-3xl p-1"
				:class="{
					'bg-main-color': !searchBarInputHasText,
					'bg-primary': searchBarInputHasText,
				}"
				v-if="screenWidth <= OVERLAY_THRESHOLD"
				@click="activateSearchBarOverlayAndFocus"
			>
				<SearchIcon class="h-6 w-6 fill-current text-main-bg-color" />
			</div>
			<div
				id="settings-button-wrapper"
				class="flex h-8 w-8 items-center justify-center rounded-3xl bg-main-color p-1"
			>
				<SettingsIcon class="h-6 w-6 fill-current text-main-bg-color" />
			</div>
		</div>
	</div>
</template>

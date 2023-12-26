<script setup lang="ts">
import MenuIcon from "./icons/MenuIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SettingsIcon from "./icons/SettingIcon.vue";
import ArrowBackIcon from "./icons/ArrowBack.vue";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const screenWidth = ref(window.innerWidth);
const input = ref<HTMLInputElement | null>(null);
const showInput = ref(false);

const toggleInput = () => {
  showInput.value = !showInput.value;
};

const focusInput = () => {
  showInput.value = true;
  // Use nextTick to ensure the input is rendered before trying to focus
  nextTick(() => {
    input.value?.focus();
  });
};

const toggleInputAndFocus = () => {
  toggleInput();
  focusInput();
};

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
  <div id="top-panel">
    <div id="top-panel-left-section" v-if="!showInput">
      <MenuIcon style="width: 2rem; height: 2rem" />
      <p>Today</p>
    </div>
    <div id="top-panel-middle-section">
      <!-- search-bar only visible on larger screens -->
      <ArrowBackIcon
        id="arrow-back-icon"
        v-if="showInput"
        @click="toggleInput"
        style="width: 2rem; height: 2rem; margin-right: 2px"
      />
      <div v-if="screenWidth >= 600 || showInput" id="search-bar">
        <input
          id="search-bar-input"
          ref="input"
          v-on:blur="
            () => {
              showInput = false;
            }
          "
        />
        <div id="search-bar-icon-wrapper">
          <SearchIcon style="width: 26px; height: 26px; color: #242424" />
        </div>
      </div>
    </div>
    <div id="top-panel-right-section" v-if="!showInput">
      <!-- search-icon only visible on smaller screens -->
      <div
        id="search-icon-wrapper"
        v-if="screenWidth < 600"
        @click="toggleInputAndFocus"
      >
        <SearchIcon style="width: 30px; height: 30px; color: #242424" />
      </div>
      <div id="settings-icon-wrapper">
        <SettingsIcon style="width: 34px; height: 34px; color: #242424" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: rgba(255, 255, 255, 0.7);
}
p {
  margin: 0;
  position: relative;
  bottom: 1px;
  font-size: 24px;
}
input {
  outline: none;
  margin-left: 12px;
  font-size: 18px;
}
#top-panel {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 3rem;
}
#top-panel-left-section {
  flex: 1 1 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
#top-panel-middle-section {
  max-width: 900px;
  flex: 1 1 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#top-panel-right-section {
  flex: 1 1 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
#search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: rgba(255, 255, 255, 0.5) solid 2px;
  border-radius: 25px;
}
#search-bar-input {
  flex: 1;
  border: none;
  border-radius: 25px 0 0 25px;
  background-color: #242424;
}
#search-bar-icon-wrapper {
  display: flex;
  justify-content: center;
  width: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 25px 25px 0;
}
#search-icon-wrapper {
  height: 2rem;
  width: 3rem;
  padding: 3px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
#settings-icon-wrapper {
  height: 2rem;
  width: 2rem;
  padding: 3px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

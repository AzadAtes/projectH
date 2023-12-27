<script setup lang="ts">
import MenuIcon from "./icons/MenuIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SettingsIcon from "./icons/SettingIcon.vue";
import ArrowBackIcon from "./icons/ArrowBack.vue";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const screenWidth = ref(window.innerWidth);
const input = ref<HTMLInputElement | null>(null);
const showInput = ref(false);
const inputIsFocused = ref(false);

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

const handleInputFocus = () => {
  inputIsFocused.value = true;
};

const handleInputBlur = () => {
  showInput.value = false;
  inputIsFocused.value = false;
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
    <div
      id="top-panel-left-section"
      v-if="screenWidth >= 600 || (!showInput && !inputIsFocused)"
    >
      <MenuIcon class="icon" />
      <p>Today</p>
    </div>
    <div id="top-panel-middle-section">
      <ArrowBackIcon
        id="arrow-back-icon"
        class="icon"
        v-if="screenWidth < 600 && (showInput || inputIsFocused)"
        @click="toggleInput"
      />
      <!-- search-bar only visible on larger screens -->
      <div
        id="search-bar"
        v-if="screenWidth >= 600 || showInput || inputIsFocused"
      >
        <input
          id="search-bar-input"
          ref="input"
          @focus="handleInputFocus"
          v-on:blur="handleInputBlur"
        />
        <div id="search-bar-icon-wrapper" class="iconWrapper">
          <SearchIcon class="icon" style="color: #242424" />
        </div>
      </div>
    </div>
    <div
      id="top-panel-right-section"
      v-if="screenWidth >= 600 || (!showInput && !inputIsFocused)"
    >
      <!-- search-icon only visible on smaller screens -->
      <div
        id="search-icon-wrapper"
        class="iconWrapper"
        v-if="screenWidth < 600"
        @click="toggleInputAndFocus"
      >
        <SearchIcon class="icon" style="color: #242424" />
      </div>
      <div id="settings-icon-wrapper" class="iconWrapper">
        <SettingsIcon class="icon" style="color: #242424" />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: #bdbdbd;
}
p {
  margin: 0;
  position: relative;
  bottom: 1px;
  font-size: 22px;
}
input {
  outline: none;
  margin-left: 12px;
  font-size: 18px;
}
.icon {
  width: 2rem;
  height: 2rem;
}
.iconWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 2rem;
  width: 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: #929292 solid 2px;
  border-radius: 25px;
}
#search-bar-input {
  flex: 1;
  border: none;
  border-radius: 25px 0 0 25px;
  background-color: #242424;
}
#search-bar-icon-wrapper {
  width: 3rem;
  background-color: #929292;
  border-radius: 0 25px 25px 0;
}
#search-icon-wrapper {
  height: 2rem;
  width: 3rem;
  padding: 3px;
  border-radius: 25px;
  background-color: #929292;
}
#settings-icon-wrapper {
  height: 2rem;
  width: 2rem;
  padding: 3px;
  border-radius: 25px;
  background-color: #929292;
}
</style>

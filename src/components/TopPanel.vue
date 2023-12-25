<script setup lang="ts">
import MenuIcon from "./icons/MenuIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SettingsIcon from "./icons/SettingIcon.vue";
</script>

<template>
  <div id="top-panel">
    <div id="top-panel-left-section">
      <MenuIcon style="width: 2rem; height: 2rem" />
      <p>Today</p>
    </div>
    <div id="top-panel-middle-section">
      <div id="search-bar" class="rounded-right">
        <input id="search-bar-input" />
        <div id="search-bar-icon-wrapper">
          <SearchIcon style="width: 25px; height: 25px; color: #242424" />
        </div>
      </div>
    </div>
    <div id="top-panel-right-section">
      <SettingsIcon style="width: 2rem; height: 2rem"></SettingsIcon>
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
  font-size: 25px;
}
input {
  outline: none;
  margin-left: 12px;
  font-size: 18px;
}
#top-panel {
  flex: 1;
  display: flex;
  gap: 3rem;
}
#top-panel-left-section {
  flex: 1 1 100px;
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
  flex: 1 1 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
</style>

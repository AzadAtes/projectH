<script setup lang="ts">
import TopPanel from "./components/TopPanel.vue";
</script>

<template>
  <div id="header-wrapper">
    <div id="header">
      <TopPanel />
    </div>
  </div>
  <div id="content-wrapper">
    <div id="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--nav-bar-height);
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: #242424;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px;
}
#content-wrapper {
  margin-top: var(--nav-bar-height);
  height: calc(100vh - var(--nav-bar-height));
  width: 100%;
  display: flex;
  justify-content: center;
}
#header {
  flex: 1;
  display: flex;
  padding: 1rem;
}
#content {
  height: 100%;
  max-width: var(--content-max-width);
  min-width: var(--content-min-width);
  padding: 1rem;
  flex: 1;
}
</style>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <div class="navBarWrapper">
      <NavBar />
    </div>
    <div class="routerViewWrapper">
      <RouterView />
    </div>
  </div>
</template>

<style>
.navBarWrapper {
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;

  background-color: #242424;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px;

  display: flex;
  align-items: center;
}

.routerViewWrapper {
  margin: 60px auto auto auto;
  padding: 10px;
  text-align: center;

  max-width: 1280px;
  min-width: 292px; /* 320px */
  min-height: 100vh;
}
</style>

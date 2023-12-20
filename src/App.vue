<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="navBarWrapper">
    <NavBar/>
  </div>
  <div id="content">
    <div id="routerViewWrapper">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
#navBarWrapper{
  position: fixed;
  height: var(--navBar-height);
  width: 100%;
  top: 0;
  left: 0;
}
#content{
  display: flex;
  justify-content: center;
  margin-top: var(--navBar-height);
  width: 100%;
}
#routerViewWrapper{
  flex: 1;
  max-width: 1280px;
  min-width: 300px;
}
</style>

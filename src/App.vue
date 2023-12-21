<script setup lang="ts">
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="top">
    <div id="nav-bar-wrapper">
      <NavBar />
    </div>
  </div>
  <div id="bottom">
    <div id="view-wrapper">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
  #top{
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
  #bottom{
    margin-top: var(--nav-bar-height);
    height: calc(100vh - var(--nav-bar-height));
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #nav-bar-wrapper{
    max-width: var(--max-width);
    min-width: var(--min-width);
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
  }
  #view-wrapper{
    height: 100%;
    max-width: var(--max-width);
    min-width: var(--min-width);
    padding: 2rem;
    flex: 1;
  }
</style>

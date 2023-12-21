<script setup lang="ts"></script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/hello-world">HelloWorld</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
  nav{
    flex: 1;
    display: flex;
  }
  ul {
    flex: 1;
    list-style-type: none;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
  }
</style>

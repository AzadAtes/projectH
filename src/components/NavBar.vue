<script setup lang="ts"></script>

<template>
  <nav id="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/hello-world">HelloWorld</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

li {
  padding: 0.5rem;
}
</style>

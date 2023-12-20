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
  height: 100%;
  background-color: #242424;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px;
  display: flex;
  align-items: center;
}
ul {
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
  margin-inline: 1rem 0;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}
</style>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import ChangeColor from './components/ChangeColor.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import DynamicProp from './components/DynamicProp.vue';
import DebouncingExample from './components/DebouncingExample.vue';
// import { RouterView } from 'vue-router'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

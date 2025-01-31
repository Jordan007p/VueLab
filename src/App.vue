<!-- src/App.vue -->
<template>
  <div id="app">
    <BlogView/>
  </div>
</template>
<script>
import BlogView from './components/BlogView.vue';
export default {
  name: 'App',
  components: {
    BlogView,
  },
};
</script>

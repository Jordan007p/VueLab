<!-- src/components/BlogView.vue -->

<template>
  <div class="blog-view">
    <button v-if="!showEditor" @click="showEditor = true">Add new blog</button>
    <BlogEditor v-else @addNewItem="handleAddItem"/>
    <Blogs
        :blogs="blogs"
k        :isLoading="isLoading"
        :error="error"
        @deleteBlog="deleteItem"
    />
  </div>
</template>

<script>

import {ref} from 'vue';
import BlogEditor from './BlogEditor.vue';
import Blogs from './Blogs.vue';
import useBlogs from '../composables/useBlogs';

export default {
  name: 'BlogView',
  components: {
    BlogEditor,
    Blogs,
  },
  setup() {
    const showEditor = ref(false);
    const {blogs, isLoading, error, addItem, deleteItem} = useBlogs();
    const handleAddItem = (newBlog) => {
      addItem(newBlog);
      showEditor.value = false;
    };
    return {
      showEditor,
      blogs,
      isLoading,
      error,
      deleteItem,
      handleAddItem,
    };
  },
};
</script>
<style scoped>
.blog-view button {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>

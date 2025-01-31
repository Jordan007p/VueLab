<!-- src/components/Blogs.vue -->
<template>
  <div class="blogs">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <!-- Search Input -->
      <div>
        <input type="text" v-model="searchTerm" placeholder="Search blogs..."/>
      </div>
      <!-- Filter Options -->
      <div>
        <fieldset>
          <legend>Filter By:</legend>
          <label>
            <input type="checkbox" value="title" v-model="filters"/> By title
          </label>
          <label>
            <input type="checkbox" value="description" v-model="filters"/> By content
          </label>
        </fieldset>
      </div>
      <!-- Blog List -->
      <ul>
        <li v-for="blog in filteredItems" :key="blog.id">
          <h3>{{ blog.title }}</h3>
          <img v-if="blog.heroImage" :src="blog.heroImage" alt="Blog hero image" width="100%"/>
          <p>{{ blog.publishDate }}</p>
          <p>{{ blog.description }}</p>
          <button @click="$emit('deleteBlog', blog.id)">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {toRefs} from 'vue';
import useSearch from '../composables/useSearch';

export default {
  name: 'Blogs',
  props: {
    blogs: {
      type: Array,
    },
    isLoading: Boolean,
    error: Object,
  },
  setup(props, {emit}) {
    const {blogs} = toRefs(props);
    const {searchTerm, filters, filteredItems} = useSearch(blogs);
    return {searchTerm, filters, filteredItems};
  },
};

</script>
<style scoped>
.blogs {
  margin-top: 1rem;
}

.blogs input[type='text'] {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.blogs fieldset {
  margin-bottom: 1rem;
}

.blogs ul {
  list-style: none;
  padding: 0;
}

.blogs li {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
}

.blogs h3 {
  margin: 0 0 0.5rem;
}

.blogs button {
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.blogs button:hover {
  background-color: #d32f2f;

}

</style>

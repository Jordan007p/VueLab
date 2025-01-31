<!-- src/components/BlogEditor.vue -->
<template>
  <div class="blog-editor">
    <h2>Create New Blog</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label>Title:</label>
        <input v-model.trim="title" required/>
      </div>
      <div>
        <label>Author:</label>
        <input v-model.trim="author" required/>
      </div>
      <div>
        <label>ID (slug):</label>
        <input v-model.trim="id" required/>
      </div>
      <div>
        <label>Content:</label>
        <textarea v-model.trim="content" required></textarea>
      </div>
      <button type="submit">Save Blog</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'BlogEditor',
  data() {
    return {
      title: '',
      author: '',
      id: '',
      content: '',
    };
  },
  methods: {
    submitForm() {
      const newBlog = {
        id: this.id,
        title: this.title,
        author: this.author,
        description: this.content,
      };
      this.$emit('addNewItem', newBlog);
      this.resetForm();
    },
    resetForm() {
      this.title = '';
      this.author = '';
      this.id = '';
      this.content = '';
    },
  },
};
</script>
<style scoped>
.blog-editor {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}

.blog-editor label {
  display: block;
  margin-bottom: 0.5rem;
}
.blog-editor input,
.blog-editor textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;

}

</style>

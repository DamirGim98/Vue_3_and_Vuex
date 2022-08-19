<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Название"
    />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Описание"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="CreatePost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
      return {
        post: {
          id: 0,
          title: '',
          body: ''
        }
      }
    },
    methods: {
      CreatePost() {
        this.post.id = Date.now();
        if (this.post.title && this.post.body) {
          this.$emit('create', this.post)
        }
        this.post = {
          title: '',
          body: ''
        }
      }
    },

  }
</script>

<style>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
  }
</style>
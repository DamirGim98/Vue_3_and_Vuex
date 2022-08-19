<template>
  <div class="App">
    <div class="wrapper">
      <h1>Страница с постами</h1>
<!--      <my-button @click="fetchPosts">Получить посты</my-button>-->

      <my-button @click="showDialog">
        Создать пост
      </my-button>
    </div>
    <my-dialog :show="dialogVisible">
      <post-forms
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="posts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <my-loader
        v-else
    />
  </div>
</template>

<script>
import PostForms from "@/components/PostForms";
import PostList from "@/components/PostList";
import axios from 'axios'
export default {
  components: {
    PostForms, PostList
  },
  data() {
    return  {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
    }
  },
  methods: {
    createPost (post) {
      this.posts.push(post)
      this.dialogVisible = !this.dialogVisible
    },
    removePost (post) {
      this.posts = this.posts.filter(post_item => post_item.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = !this.dialogVisible
    },
    async fetchPosts () {
      try {
        this.isPostLoading = !this.isPostLoading
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data
          this.isPostLoading = !this.isPostLoading
        }, 3000)
      } catch (e) {
        alert('Что-то пошло не так...')
      } finally {

      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .App {
    padding: 20px 80px;
  }
  .wrapper {
    font-family: Arial;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
</style>
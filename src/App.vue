<template>
  <div class="App">
    <div class="wrapper">
      <h1>Страница с постами</h1>
      <my-input
          style="width: 300px; height: 30px; background-color: aliceblue; border-radius: 10px"
          v-model="searchQuery"
          placeholder="поиск..."
      />
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
      <my-button @click="showDialog">
        Создать пост
      </my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-forms
          @create="createPost"
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
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
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
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
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1,post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
  },
  watch: {

  },
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
    font-family: Arial, sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
<template>
  <div class="App">
    <h1>Страница с постами</h1>
    <div class="wrapper">
      <my-input
          style="max-width: 200px; height: 30px; background-color: aliceblue; border-radius: 10px"
          v-model="searchQuery"
          placeholder="поиск..."
      />
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
      <my-button
          @click="showDialog"
          style="align-self: start"
      >
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
    <div class="page_wrapper">
      <div
          class="page"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{
            'page_active': page === pageNumber
          }"
          @click="changePage(pageNumber)"
      >
        {{pageNumber}}
      </div>
    </div>
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
      page: 1,
      limit: 10,
      totalPages: 0,
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
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit  )
          this.posts = response.data
          this.isPostLoading = !this.isPostLoading
        }, 1000)
      } catch (e) {
        alert('Что-то пошло не так...')
      } finally {

      }
    },
    changePage (pageNumber) {
      this.page = pageNumber
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
    page () {
      this.fetchPosts()
    }
  },
}
</script>

<style>
  * {
    background-color: #dde1e7;;
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

  .page_wrapper {
    display: flex;
    margin-top: 15px;

    background: #dde1e7;
    padding: 10px;
    border-radius: 3px;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);

  }

  .page {
    flex: 1;
    margin: 0 5px;
    background: #dde1e7;
    border-radius: 3px;
    box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);


    font-family: Arial, sans-serif;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    color: #4d3252;
    height: 20px;
    line-height: 20px;
    width: 55px;
    display: block;
  }

  .page_active {
    box-shadow: inset -3px -3px 7px #ffffff73,
    inset 3px 3px 5px rgba(94, 104, 121, 0.288);
  }
  /*@media screen and (max-width: 1200px) {*/
  /*  .wrapper {*/
  /*    height: 150px;*/
  /*    align-items: flex-start;*/
  /*    justify-content: space-between;*/
  /*    flex-direction: column;*/
  /*  }*/
  /*}*/
</style>
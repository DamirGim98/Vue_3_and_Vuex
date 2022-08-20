<template>
  <div>
    <h1>Страница с постами {{$store.state.likes}}</h1>
    <div class="wrapper">
      <my-input
          style="max-width: 200px; height: 30px; background-color: aliceblue; border-radius: 10px"
          v-model="searchQuery"
          placeholder="поиск..."
          v-focus
      />
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
      <my-button
          class="create_post"
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
    <div v-intersection="loadMorePosts" class="observer"></div>
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
    async loadMorePosts () {
      try {
        this.page += 1
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit  )
          this.posts = [...this.posts, ...response.data]
        }, 1)
      } catch (e) {
        alert('Что-то пошло не так...')
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
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
    // page () {
    //   this.fetchPosts()
    // }
  },
}
</script>

<style>
.wrapper {
  margin: 20px 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.observer {
  margin-top: 10px;
  height: 10px;
  background: none;
}
.wrapper .create_post {
  height: 30px;
  border:none;
  background: #dde1e7;
  border-radius: 3px;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
}
</style>
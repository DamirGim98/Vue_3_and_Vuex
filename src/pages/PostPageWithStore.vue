<template>
  <div>
    <h1>Страница с постами и global store</h1>
    <div class="wrapper">
      <my-input
          style="max-width: 200px; height: 30px; background-color: aliceblue; border-radius: 10px"
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="поиск..."
          v-focus
      />
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  components: {
    PostForms, PostList
  },
  data() {
    return  {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
      removePostFromStore: 'post/removePostFromStore'
    }),
    ...mapGetters({

    }),
    createPost (post) {
      this.posts.push(post)
      this.dialogVisible = !this.dialogVisible
    },
    removePost (post) {
      this.$store.dispatch('post/removePostFromStore', post)
    },
    showDialog() {
      this.dialogVisible = !this.dialogVisible
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {

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
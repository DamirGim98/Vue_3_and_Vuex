<template>
  <div v-if="posts.length > 0" >
    <h3>
      Список поcтов:
    </h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red" > Post list is empty </h2>
</template>

<script>
import postItem from "@/components/PostItem";
export default {
  components: {
    postItem,
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
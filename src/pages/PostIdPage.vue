<template>
  <div>
    <h1>Пост номер: {{ $route.params.id}} </h1>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
  }

}
</script>

<style scoped>

</style>
<template>
  <div class="post">
    <div>
      <div class="text-container" ><strong>Название: </strong>{{ post.title}}</div>
      <div class="text-container"  ><strong>Описание: </strong>{{post.body}}</div>
    </div>
    <div>
      <my-button
          style="width: 30px; height: 30px; background-color: red"
          @click="$emit('remove', post)"
      >
        &times;
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border: 2px solid teal;
  border-radius: 5px;
  margin-top: 15px;
}
.text-container {
  padding-right: 20px;
}
</style>
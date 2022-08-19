<template>
  <div class="post">
    <div>
      <div class="text-container" ><strong>Название: </strong>{{ post.title}}</div>
      <div class="text-container"  ><strong>Описание: </strong>{{post.body}}</div>
    </div>
    <div>
      <div class="button_wrapper">
        <my-button
            class="view_btn"
            @click="$router.push(`/posts/${post.id}`)"
        >
          <img src="https://cdn-icons.flaticon.com/png/512/2990/premium/2990159.png?token=exp=1660931079~hmac=2037ee3509d2aa5845497e268716a82e" alt="icon">
        </my-button>
        <my-button
            class="delete_btn"
            @click="$emit('remove', post)"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="">
        </my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-item',
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
  /*border: 2px solid teal;*/
  border-radius: 5px;
  margin-top: 15px;

  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
}
.text-container {
  padding-right: 10px;
}

.post .delete_btn {
  width: 30px;
  height: 30px;
  background-color:lightgrey;
  border: none;
}
.post .view_btn {
  width: 30px;
  height: 30px;
  background-color:lightskyblue;
  border: none;
}
.button_wrapper {
  display: flex;
  flex-direction: column;
}
img {
  width: 60%;
  height: auto;
}
</style>
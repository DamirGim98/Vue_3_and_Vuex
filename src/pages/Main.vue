<template>
  <div class="main_wrapper">
    <h1>Main page of Vue app</h1>
    <my-button  class="main_btn" @click="$router.push('/posts')">Get started</my-button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main_wrapper {
  height: 50vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(221, 225, 231, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main_wrapper .main_btn {
  margin-top: 30px;
  align-self: center;
  background: lightseagreen;
  border: none;
  border-radius: 3px;
  box-shadow: -1px -1px 10px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
}
</style>
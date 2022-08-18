<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 5px 5px;
  margin-top: 0;
  align-self: end;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: none;
  color: black;
}
</style>
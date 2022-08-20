<template>
  <div class="navbar">
    <div class="navbar_title" @click="$router.push('/')" >Vue app</div>
    <div class="navbar_btns">
      <my-button
          @click="$router.push('/posts')"
          class="navbar_btn"
      >
        Post App
      </my-button>

      <my-button
          @click="$router.push('/about')"
          class="navbar_btn navbar_btn_active"
      >
        About App
      </my-button>
      <my-button
          @click="$router.push('/store')"
          class="navbar_btn navbar_btn_active"
      >
        VueX App
      </my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  padding: 0 80px;
  width: 100vw;
  height: 70px;
  display: grid;
  grid-template-columns: 2fr 1fr 4fr;
  justify-items: center;
  align-items: center;
  gap: 20px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
}
.navbar_btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
  grid-column: 3/3;
  background: none;
}
.navbar_title  {
  justify-self: start;
  text-transform: capitalize;
  font-style: italic;
  font-family: 'Silkscreen', cursive;
  font-size: 40px;
  color: aliceblue;
}

.navbar .navbar_btn {
  width: 100px;
  height: 30px;

  background: lightseagreen;
  border: none;
  border-radius: 3px;
  box-shadow: -1px -1px 10px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);

  color: white;
  font-family: 'Silkscreen', cursive;
}

.navbar_btn_active {
  box-shadow: inset -3px -3px 7px #ffffff73,
  inset 3px 3px 5px rgba(94, 104, 121, 0.288);
}
</style>
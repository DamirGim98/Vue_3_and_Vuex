<template>
  <navbar></navbar>
  <div class="App" style="background: #dde1e7">

    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "@/components/UI/Navbar";
export default {
  components: {navbar}


}
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
  /*background-color: #dde1e7;;*/
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.App {
  padding: 20px 80px;
}
</style>
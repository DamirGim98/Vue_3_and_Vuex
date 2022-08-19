<template>
  <div class="spinner-wrapper">
    <div class="lds-facebook"><div></div><div></div><div></div></div>
  </div>
</template>

<script>
export default {
  name: 'my-loader'
}
</script>

<style scoped>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: teal;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
.spinner-wrapper {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(221, 225, 231, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
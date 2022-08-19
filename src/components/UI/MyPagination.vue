<template>
  <div class="page_wrapper">
    <div
        class="page"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
            'page_active': page === pageNumber
          }"
        @click="changePage(pageNumber)"
    >
      {{pageNumber}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-pagination',
  props: {
    totalPages: {
      type: Number,
      default: 1,
    },
    page: {
      type: Number,
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("update:page", pageNumber)
    }
  }
}
</script>

<style scoped>
.page_wrapper {
  display: flex;
  margin-top: 15px;

  background: #dde1e7;
  padding: 10px;
  border-radius: 3px;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);

}

.page {
  flex: 1;
  margin: 0 5px;
  background: #dde1e7;
  border-radius: 3px;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);


  font-family: Arial, sans-serif;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  color: #4d3252;
  height: 20px;
  line-height: 20px;
  width: 55px;
  display: block;
}

.page_active {
  box-shadow: inset -3px -3px 7px #ffffff73,
  inset 3px 3px 5px rgba(94, 104, 121, 0.288);
}
</style>
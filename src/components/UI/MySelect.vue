<template>
  <select class="sort-method" v-model="modelValue" @change="changeOptions">
    <option  disabled value="">Выберете метод сортировки</option>
    <option
        style="background-color: aliceblue"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
    {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOptions (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
  .sort-method {
    max-width: 200px;
    height: 30px;
    background-color: aliceblue;
    border-radius: 10px;
  }
</style>
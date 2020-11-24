<template>
  <div>
    <h3>{{ name }}</h3>
    <form v-for="input in inputs" :key="input.id">
      <label :for="input.id" v-text="input.name"></label>
      <input class="input" :type="input.type" :id="input.id" />
    </form>
    <input class="btn" type="submit" :value="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    inputs: {
      type: Array,
    },
  },
};
</script>

<style scoped>
@import "./styles/form.css";
</style>

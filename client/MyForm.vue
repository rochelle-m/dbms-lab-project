<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form" v-for="input in inputs" :key="input.id">
        <label :for="input.id" v-text="input.name"></label>
        <input
          class="input"
          :id="input.id"
          :type="input.type"
          @input="onInput"
          :name="input.name"
        />
      </div>
      <button class="btn" type="submit">{{ name }}</button>
    </form>
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
  methods: {
    onInput($evt) {
      this.$emit("inputChanged", $evt.target.value, $evt.target.name);
    },
    onSubmit($evt) {
      this.$emit("submitted");
      var inputs = document.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));
    },
  },
};
</script>

<style scoped>
@import "./styles/form.css";
</style>

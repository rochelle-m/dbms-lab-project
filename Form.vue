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
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h3 {
  text-decoration: underline;
}
form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.input {
  margin: 4px;
  border: 1px solid rgb(95, 91, 91);
  border-radius: 4px;
  width: 250px;
  padding: 4px 2px;
}

label {
  text-transform: capitalize;
  margin-top: 16px;
}
</style>

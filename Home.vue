<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // TODO check if auth, if auth call next()

    // returns back to home page
    next("/");
  },
};
</script>

<style></style>

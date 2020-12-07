<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // auth prop is a string
    if (to.params.auth == "true") next();
    else next("/");
  },
};
</script>

<style></style>

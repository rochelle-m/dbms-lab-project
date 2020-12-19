<template>
  <h4>Account Info</h4>
</template>

<script>
export default {
  async beforeRouteEnter(to, from, next) {
    const res = await fetch(`http://localhost:3001/user?id=${to.params.id}`);
    const data = await res.json();
    console.log(data);
    next();
  },
};
</script>

<style></style>

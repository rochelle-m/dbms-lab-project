<template>
  <div class="card">
    <div class="type">
      <slot name="type" />
    </div>
    <div class="image">
      <slot name="image" />
    </div>
    <div class="title">
      <slot name="title" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: white;
  color: rgb(20, 20, 41);
  border-radius: 8px;
  width: 200px;
  margin: 14px 5px;
  padding: 10px 2px;
  cursor: pointer;
  justify-content: center;
}

.card:hover {
  box-shadow: 0px 1px 6px darkgrey;
}
.image,
.title {
  width: inherit;
  padding: 6px;
  margin: 0 auto;
  text-align: center;
}

.type {
  color: rgb(75, 75, 75);
  margin-top: 8px;
  text-align: center;
}
</style>

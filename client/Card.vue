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
  border: 1px solid silver;
  border-radius: 8px;
  width: 160px;
  margin: 0 5px;
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
  text-transform: capitalize;
  margin: 0 auto;
  text-align: center;
}

.type {
  color: gray;
  margin-top: 8px;
  text-align: center;
}
</style>

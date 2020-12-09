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
    <div class="description">
      <slot name="description" />
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
}
</style>

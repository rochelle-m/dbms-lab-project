<template>
  <div class="list">
    <card>
      <template v-slot:type> </template>
      <template v-slot:image></template>
      <template v-slot:title> </template>
      <template v-slot:description> </template>
    </card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.list {
  margin: 8vh 0;
}
</style>

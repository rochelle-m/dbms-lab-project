<template>
  <div class="list">
    <card v-for="item in dataItems" :key="item.id">
      <template v-slot:type>{{ item.type }}</template>
      <template v-slot:image>
        <img :src="item?.images[0]?.url" alt="" />
      </template>
      <template v-slot:title> {{ item.name }} </template>
    </card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    dataItems: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list {
  margin: 4vh 0;
  display: flex;
  justify-content: space-between;
}

img {
  width: 120px;
}
</style>

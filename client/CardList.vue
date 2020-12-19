<template>
  <div class="list">
    <div v-for="items in dataItems" :key="items">
      <card v-for="item in items" :key="item">
        <template v-slot:type>
          {{ item.name }}
        </template>
        <template v-slot:image>
          <img :src="item.image_url" alt="" />
        </template>
        <template v-slot:title>
          <a :href="item.url">url</a>
          <div class="like" @click="like(item.id)">{{ liked }}</div>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  mounted() {
    console.log(this.dataItems);
  },
  components: {
    Card,
  },
  props: {
    dataItems: {
      type: Array,
    },
  },
  methods: {
    like(name) {
      //request to enter like
      console.log(name);
    },
  },
  data() {
    return {
      liked: "🖤",
    };
  },
};
</script>

<style scoped>
.list {
  margin: 4vh 0;
  display: flex;
  justify-content: space-around;
}

img {
  width: 120px;
}
</style>

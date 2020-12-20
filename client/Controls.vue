<template>
  <div v-if="!liked" @click="onLike(item)">🖤</div>
  <div v-else>❤️</div>
</template>

<script>
import request from "./utils/request.js";
export default {
  props: {
    item: {
      type: Object,
    },
    id: {},
  },
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    async onLike(item) {
      this.liked = true;
      const packet = {
        id: this.id,
        song_id: item.id,
      };
      console.log(packet);
      const data = await request(`http://localhost:3001/like`, packet);
      console.log(data);
      console.log(item);
    },
  },
};
</script>

<style></style>

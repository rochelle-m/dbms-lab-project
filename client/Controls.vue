<template>
  <div v-if="!liked" @click="onLike(item)">🖤</div>
  <div v-else>❤️</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    onLike(item) {
      this.liked = true;
      console.log(item);
    },
  },
};
</script>

<style></style>

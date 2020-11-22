<template>
  <div>
    <h2>{{ appTitle }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appTitle: `📻 Music & Podcast streaming ♪`,
    };
  },
};
</script>

<style>
* {
  background: rgb(34, 33, 33);
  color: white;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
}

h2 {
  font-size: 36px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid silver;
}
</style>

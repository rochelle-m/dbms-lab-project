<template>
  <div>
    <h2>{{ appTitle }}</h2>
    <div class="container">
      <img src="./images/girl-music.png" />
      <div class="btns">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </div>
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

img {
  width: 40%;
  border-radius: 10% 0% 0% 10%;
}

.container {
  display: flex;
  justify-content: center;
}

button {
  background: rgb(1, 109, 55);
  border: none;
  padding: 10px;
  margin-top: 8vh;
  width: 10vw;
  cursor: pointer;
  border-radius: 6px;
  font-size: 18px;
}

button:hover {
  background: rgb(40, 165, 102);
}

.btns {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

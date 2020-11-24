<template>
  <div>
    <h2>{{ appTitle }}</h2>
    <div class="container">
      <img src="./images/girl-music.png" />
      <div class="btns" v-if="!signUp && !login">
        <button class="btn" @click="displaySignUp">Sign Up</button>
        <button class="btn" @click="displayLogin">Login</button>
      </div>
      <my-input v-if="signUp" :inputs="inputs" name="Sign Up" />
      <my-input v-if="login" :inputs="inputs.slice(1)" name="Login" />
    </div>
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";
export default {
  components: {
    MyInput,
  },
  data() {
    return {
      appTitle: `📻 Music & Podcast streaming ♪`,
      inputs: [
        { id: 1, name: "name", type: "text" },
        { id: 2, name: "email", type: "email" },
        { id: 3, name: "password", type: "password" },
      ],
      signUp: false,
      login: false,
    };
  },
  methods: {
    displaySignUp() {
      [this.signUp, this.login] = [true, false];
    },
    displayLogin() {
      [this.login, this.signUp] = [true, false];
    },
  },
};
</script>

<style>
@import "./styles/main_file.css";
</style>

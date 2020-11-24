<template>
  <div>
    <h2>{{ appTitle }}</h2>
    <div class="container">
      <img src="./images/girl-music.png" />
      <div class="btns" v-if="!signUp && !login">
        <button class="btn" @click="displaySignUp">Sign Up</button>
        <button class="btn" @click="displayLogin">Login</button>
      </div>
      <my-input
        v-if="signUp"
        :inputs="inputs"
        name="Sign Up"
        @inputChanged="setValues"
        @submitted="signup"
      />
      <my-input
        v-if="login"
        :inputs="inputs.slice(1)"
        name="Login"
        @inputChanged="setValues"
        @submitted="submit"
      />
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
      user: {
        name: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    displaySignUp() {
      [this.signUp, this.login] = [true, false];
    },
    displayLogin() {
      [this.login, this.signUp] = [true, false];
    },
    setValues(value, name) {
      this.user[name] = value;
    },
    async signup() {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      });
      const data = await response.json();
      console.log(data);
    },
  },
};
</script>

<style>
@import "./styles/main_file.css";
</style>

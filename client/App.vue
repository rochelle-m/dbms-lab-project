<template>
  <div>
    <h2>📻 Music & Podcast streaming ♪</h2>
    <div class="container">
      <img src="./images/girl-music.png" />
      <div class="btns" v-if="!signUp && !login">
        <button class="btn" @click="displaySignUp">Sign Up</button>
        <button class="btn" @click="displayLogin">Login</button>
      </div>
      <my-form
        v-if="signUp"
        :inputs="inputs"
        name="Sign Up"
        @inputChanged="setValues"
        @submitted="onSubmit('register')"
      />
      <my-form
        v-if="login"
        :inputs="inputs.slice(1)"
        name="Login"
        @inputChanged="setValues"
        @submitted="onSubmit('login')"
      />
    </div>
  </div>
</template>

<script>
import MyForm from "./MyForm.vue";
import request from "./utils/request.js";
export default {
  components: {
    MyForm,
  },
  data() {
    return {
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
      auth: false,
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
    async onSubmit(path) {
      const data = await request(`http://localhost:3001/${path}`, this.user);
      console.log(data);
      this.auth = data.auth;
      this.$router.push({ name: "home", params: data });
    },
  },
};
</script>

<style></style>

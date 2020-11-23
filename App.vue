<template>
  <div>
    <h2>{{ appTitle }}</h2>
    <div class="container">
      <img src="./images/girl-music.png" />
      <div class="btns" v-if="!signUp && !login">
        <button class="btn" @click="displaySignUp">Sign Up</button>
        <button class="btn" @click="displayLogin">Login</button>
      </div>
      <my-form v-if="signUp" :inputs="inputs" name="Sign Up" />
      <my-form v-if="login" :inputs="inputs.slice(1)" name="Login" />
    </div>
  </div>
</template>

<script>
import MyForm from "./Form.vue";
export default {
  components: {
    MyForm,
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
      this.signUp = true;
      this.login = !this.signUp;
    },
    displayLogin() {
      this.login = true;
      this.signUp = !this.login;
    },
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

.btn {
  background: rgb(1, 109, 55);
  border: none;
  padding: 10px;
  margin-top: 8vh;
  width: 10vw;
  cursor: pointer;
  border-radius: 6px;
  font-size: 18px;
}

.btn:hover {
  background: rgb(40, 165, 102);
}

.btns {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

<template>
  <div>
    <div class="user">
      <h4>Account Information</h4>
      <div class="userInfo">
        <table>
          <tr>
            <th>Name</th>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ user.email }}</td>
          </tr>
        </table>

        <button class="btn" @click="canEdit">Edit</button>
      </div>
      <my-form
        class="my-form"
        v-if="edit"
        :inputs="inputs"
        name="Save"
        @inputChanged="setValues"
        @submitted="onSubmit('login')"
      />

      <!-- <card v-for="item in dataLikes" :key="item">
      <template v-slot:type>
        {{ item.name }}
      </template>
      <template v-slot:image>
        <img :src="item.image_url" alt="" />
      </template>
      <template v-slot:title>
        <a :href="item.url">url</a>
      </template>
    </card> -->
    </div>
    <div class="my-liked">
      <h3>Your liked songs</h3>
      <div v-for="item in dataLikes" :key="item.id">
        <div>{{ item.name }}</div>
        <img :src="item.image_url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import MyForm from "./MyForm.vue";
import Card from "./Card.vue";
export default {
  components: {
    Card,
    MyForm,
  },

  async mounted() {
    const userId = this.$route.params.id;
    const res = await fetch(`http://localhost:3001/user?id=${userId}`);
    const data = await res.json();
    this.user = data[0];
    console.log(this.user);

    console.log(userId);
    const resLikes = await fetch(`http://localhost:3001/likes?id=${userId}`);
    const dataLikes = await resLikes.json();

    this.dataLikes = dataLikes;
    console.log(dataLikes);
  },
  methods: {
    canEdit() {
      this.edit = true;
    },
    async onSubmit(param) {
      this.edit = false;
      console.log(this.newUser);
      const response = await fetch("http://localhost:3001/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.newUser),
      });
      const data = await response.json();
      alert((data.affectedRows && "Details updated!") || data.message);
      const userId = this.$route.params.id;
      const res = await fetch(`http://localhost:3001/user?id=${userId}`);
      const data1 = await res.json();
      this.user = data1[0];
      console.log(data1);
    },
    setValues(value, name) {
      this.newUser[name] = value;
    },
  },

  components: {
    MyForm,
  },
  data() {
    return {
      edit: false,
      dataLikes: null,
      inputs: [
        { id: 1, name: "name", type: "text" },
        { id: 2, name: "email", type: "email" },
      ],
      user: {
        name: "",
        email: "",
      },
      newUser: {
        id: this.$route.params.id,
        name: "",
        email: "",
      },
    };
  },
};
</script>

<style scoped>
.user {
  display: flex;
  justify-content: space-around;
}
.userInfo {
  margin-top: 70px;
  margin-left: -170px;
}
table {
  border-spacing: 28px;
}
.my-form {
  margin-top: 50px;
}

img {
  width: 10%;
}

.my-liked {
  margin: 10px 10px;
}
</style>

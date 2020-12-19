<template>
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
  </div>
</template>

<script>
import MyForm from "./MyForm.vue";
export default {
  async mounted() {
    const userId = this.$route.params.id;
    const res = await fetch(`http://localhost:3001/user?id=${userId}`);
    const data = await res.json();
    this.user = data[0];
    console.log(this.user);
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
</style>

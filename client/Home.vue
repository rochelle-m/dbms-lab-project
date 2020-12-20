<template>
  <div class="home">
    <div class="header-container">
      <i
        class="fa fa-user-circle account"
        title="Account"
        @click="openAccount"
      ></i>
      <div class="header">
        <input
          class="searchbar"
          type="text"
          @input="getInputTextOnClick"
          placeholder="Search for an album, artist, playlist, track, show or episode"
        />
        <i
          class="fa fa-search searchicon"
          aria-hidden="true"
          title="Search"
          @click="search"
        >
        </i>
      </div>
    </div>
    <nav class="search-body">
      <a
        class="nav-item"
        v-for="category in categories"
        :class="{ selected: category.show }"
        :key="category.name"
        @click="selected(category)"
      >
        {{ category.name }}
      </a>
    </nav>
    {{ currentCategory }}
    <div>
      <card-list :dataItems="queryRes" :id="id" />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import CardList from "./CardList.vue";

export default {
  beforeRouteEnter(to, from, next) {
    if (to.params.auth == "true" || from.name == "account") next();
    else next("/");
  },
  components: {
    CardList,
  },
  data() {
    return {
      queryRes: [],
      allTypes: [],
      currentCategory: "",
      searchStr: "",
      id: null,
    };
  },
  mounted() {
    const userId = this.$route.params.id;
    this.id = userId;
    console.log(this.id);
  },
  methods: {
    selected({ name, show }) {
      this.currentCategory = name;

      console.log(this.categories);
    },
    async search() {
      console.log(this.searchStr);
      const res = await fetch(
        `http://localhost:3001/search?val=${this.searchStr}&type=${this.currentCategory}`
      );

      const data = await res.json();
      this.queryRes = data;
      console.log(data);
    },
    getInputTextOnClick($evt) {
      this.searchStr = $evt.target.value;
    },
  },
  setup() {
    const categories = [
      {
        name: "artists",
        show: false,
      },
      {
        name: "albums",
        show: false,
      },
      {
        name: "tracks",
        show: false,
      },
      {
        name: "podcasts",
        show: false,
      },
    ];

    const router = useRouter();

    const openAccount = function () {
      router.push({
        name: "account",
        params: { id: router.currentRoute._rawValue.params.id },
      });
    };

    return {
      openAccount,
      categories,
    };
  },
};
</script>

<style scoped>
@import "./styles/home.css";
</style>

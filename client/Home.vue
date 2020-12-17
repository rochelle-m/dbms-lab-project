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
      <card-list :dataItems="artists" />
      <card-list :dataItems="albums" />
      <card-list :dataItems="episodes" />
      <card-list :dataItems="playlists" />
      <card-list :dataItems="tracks" />
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
      tracks: [],
      artists: [],
      playlists: [],
      episodes: [],
      albums: [],
      allTypes: [],
      currentCategory: "",
    };
  },
  methods: {
    selected({ name, show }) {
      this.currentCategory = name;
      // this.categories.filter((c) => c.name == name)[0].show = true;

      console.log(this.categories);
    },
  },
  setup() {
    const searchStr = ref("");

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

    const getInputTextOnClick = function ($evt) {
      searchStr.value = $evt.target.value;
    };

    const search = async function () {
      const res = await fetch(
        "http://localhost:3001/search?val=" + searchStr.value
      );

      const data = await res.json();
      console.log(data);
    };

    const openAccount = function () {
      router.push({
        name: "account",
        params: { id: router.currentRoute._rawValue.params.id },
      });
    };

    return {
      search,
      getInputTextOnClick,
      searchStr,
      openAccount,
      categories,
    };
  },
};
</script>

<style scoped>
@import "./styles/home.css";
</style>

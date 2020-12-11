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
    {{ currentUserId }}
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
import { ref } from "vue";
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
      currentUserId: null,
    };
  },
  mounted() {
    const router = useRouter();
    this.currentUserId = router.currentRoute._rawValue.params.id;
  },
  setup() {
    const searchStr = ref("");

    const router = useRouter();

    const getInputTextOnClick = function ($evt) {
      searchStr.value = $evt.target.value;
    };

    const search = function () {};

    const openAccount = function () {
      router.push({
        name: "account",
        params: { id: currentUserId },
      });
    };

    return {
      search,
      getInputTextOnClick,
      searchStr,
      openAccount,
    };
  },
};
</script>

<style scoped>
@import "./styles/home.css";
</style>

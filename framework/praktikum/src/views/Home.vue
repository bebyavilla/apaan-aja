<template>
  <b-card-group>
    <b-card>
    <div class="home align-center">
      <h2>Berita Terkini</h2>
      <!-- <img class="vue" alt="Vue logo" src="../assets/logo.png" /> <br> -->
      <div>
        <b-card>
        <div class="items" v-for="news in listsNews" :key="news.id">
        <img :src="news.urlToImage" />
        <div>
            <h3><div class="author">{{ news.author }}</div></h3>
            <router-link
            :to="{name: 'DetailItemNews', params: { title: news.title} }">{{ news.title }}</router-link>
            <div class="date"> {{ news.publishedAt }}</div>
        </div>
        </div>
        </b-card>
      </div>
    </div>
    </b-card>
  </b-card-group>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  computed: {
    listsNews() {
      return this.$store.state.listNews;
    },
  },
    mounted() {
      this.$store.dispatch('fetchNews');
    }
};
</script>

<style scoped>
img {
    width: 400px;
    margin-top: 30px;
}
.items {
  background-color: #c7d9d2;
  justify-content: center;
}
.date {
  margin-bottom: 30px;
}
</style>
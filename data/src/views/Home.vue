<template>
  <div class="home">
    <!-- <img class="vue" alt="Vue logo" src="../assets/logo.png" /> <br> -->
    <div>
      <div class="items" v-for="news in listsNews" :key="news.id">
      <img :src="news.urlToImage" />
      <div>
          <div class="author">{{ news.author }}</div>
          <router-link
          :to="{name: 'DetailNews', params: { title: news.title} }">{{ news.title }}</router-link>
          <div class="date"> {{ news.publishedAt }}</div>
      </div>
      </div>
    </div>
    
  </div>
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
}

.items {
  background-color: #c7d9d2;
  
}
</style>

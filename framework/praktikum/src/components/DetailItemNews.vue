<template>
  <div class="item">
    <b-card>
    <h2 class="titleDetail">Detail News</h2><br>
    <img :src="news.urlToImage" /><br><br>
    <h3><div class="author">{{ news.author }}</div></h3>
    <b><div class="title">{{ news.title }}</div><br></b>
    <div class="content">{{ news.description }}</div>
    Lanjutkan baca disini : <router-link to="news.url">Sini</router-link>
    <br><br>
    <v-btn depressed color="primary"><router-link to="/" tag="button">Kembali</router-link></v-btn>
    </b-card>
  </div>
</template>

<script>
// component stateless / presenter component
// layout -> views -> component bisa banyak / didalam component boleh ada component
export default {
  name: "DetailItemNews",
  props: {
    news: Object,
  },
};
</script>

<style>
  img {
    width: 300px;
  }
  .item {
    margin-bottom: 30px;
  }
  .router-link {
    margin-top: 50px;
    background-color: #c7d9d2;
  }
  .titleDetail {
    background-color: #c7d9d2;
    display: inline;
  }
  #nav a.router-link-exact-active {
  color: #42b983;
}
</style>
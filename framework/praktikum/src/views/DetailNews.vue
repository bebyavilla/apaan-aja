<template>
  <div class="news-wrapper">
      <!-- <h1>hai</h1> -->
    <DetailItemNews :news="detailNews"/>
  </div>
</template>

<script>
import DetailItemNews from "@/components/DetailItemNews.vue";
export default {
  name: "DetailNews",
  components: {
    DetailItemNews,
  },
  data() {
    return {
      data: {
        title: "test",
      }
    }
  },
  mounted() {},
  computed: {
    detailNews() {
      const detail = this.$store.state.listNews.filter(
        (value) => value.title === this.$route.params.title
      )
      console.log("detail: ", detail)
      return detail[0];
    }
  },
  methods: {},
};
</script>

<style scoped>
.news-wrapper {
    background-color: #c7d9d2;
}
</style>
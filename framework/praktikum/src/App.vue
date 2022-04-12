<template>
  <v-app>
    <v-app-bar app color="primary" dark height="50px">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>News App</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/bebyavilla"
        target="_blank"
        text
      >
        <span class="mr-2">View Github</span>
        
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>



    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
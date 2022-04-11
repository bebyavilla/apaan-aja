<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" /> <br>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
      {{ pokemon.name }}
      </li>



    </ul>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  computed: {
    pokemons() {
      return this.$store.state.listPokemon;
    },
  },
    mounted() {
      this.$store.dispatch('fetchPokemon');
    }
};
</script>

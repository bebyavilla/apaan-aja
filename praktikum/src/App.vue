<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{ message }}</div>
    <h3>Section 11</h3>
            <h1>{{ message }}</h1>
            <center>
            <ol>
                <li v-for="todo in listToDo" v-bind:key="todo.id">
                    {{ todo }}
                </li>
            </ol>
            </center>
            <input type="text" v-model="todo"/>
            <p class="error" v-if="error"> {{ error }}</p>
            <button model="add" @click="addNew">TAMBAHKAN</button>
            <div v-if="listToDo.length >= 4" class="txt-hebat">Hebat!</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'



export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
       message: '',
        todo: "",
        listToDo: [],
        error : '',

        }
    },
    methods: {
      addNew() {
        this.error;
        if(this.todo) {
          this.listToDo.push(this.todo)
          console.log(this.todo);
        }
        else if(this.todo === '') {
          this.error.push('masukkan data');
          this.$alert("Hello Vue Simple Alert.");
        }
     }
}
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ol {
  position: center;
}
</style>

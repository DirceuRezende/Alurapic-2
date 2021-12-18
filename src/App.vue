<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
        titulo: 'Alurapic',
        foto: {
          url: 'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
          titulo: 'Cachorro'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

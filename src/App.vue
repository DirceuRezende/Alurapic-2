<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotos" :key="foto.titulo">
        <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  name: 'app',
    components: {
     'meu-painel': Painel
  },
  data () {
      return {
        titulo: 'Alurapic',
        fotos: [
          {
            url: 'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
            titulo: 'Cachorro 1'
          },
          {
            url: 'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
            titulo: 'Cachorro 2'
          }
        ]
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos)
      .catch(err => console.log(err));
  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }
</style>

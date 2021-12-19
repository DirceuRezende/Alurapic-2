<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto.titulo">
        <meu-painel :titulo="foto.titulo">
              <imagem-responsiva :src="foto.url" :alt="foto.titulo" />
              <!--<meu-botao rotulo="remover" tipo="button" @click.native="remove(foto)"/>-->
              <meu-botao
                rotulo="REMOVER"
                tipo="button"
                :confirmacao="true"
                estilo="perigo"
                @botaoAtivado="remove($event, foto)"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-reponsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

export default {
  name: 'home',
    components: {
     'meu-painel': Painel,
     'imagem-responsiva': ImagemResponsiva,
     'meu-botao': Botao
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
        ],
        filtro: ''
    }
  },
  computed: {
    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove($event, foto) {
      alert($event);
      alert(`Remover a foto! ${foto.titulo}`);
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

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>

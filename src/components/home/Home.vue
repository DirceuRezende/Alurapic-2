<template>
  <div>
    <!--<h1 class="centralizado" v-meu-transform="15">{{ titulo }}</h1>-->
    <!--<h1 class="centralizado" v-meu-transform="{ incremento: 15, animate: true }">{{ titulo }}</h1>-->
    <h1 class="centralizado" v-meu-transform.animate.reverse="15">{{ titulo }}</h1>

    <p class="centralizado" v-show="mensagem">{{ mensagem }}</p>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto.titulo">
        <meu-painel :titulo="foto.titulo">
              <imagem-responsiva :src="foto.url" :alt="foto.titulo" v-meu-transform:scale.animate="1.1" />
              <!--<meu-botao rotulo="remover" tipo="button" @click.native="remove(foto)"/>-->
              <router-link :to="{ name: 'cadastro', params: { id : foto._id }}">
                <meu-botao
                  rotulo="Alterar"
                  tipo="button"/>
              </router-link>
              <meu-botao
                rotulo="REMOVER"
                tipo="button"
                :confirmacao="true"
                estilo="perigo"
                @botaoAtivado="remove($event, foto)"
              />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

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
        fotos: [],
        filtro: '',
        mensagem: ''
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
     remove(_, foto) {
       console.log(foto)
      this.service
        .apaga(foto._id)
        .then(
          () => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          },
          err => {
            this.mensagem = 'Não foi possível remover a foto';
            console.log(err);
          }
        )
    }

  },

  created() {
    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
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

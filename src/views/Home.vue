<template>
    <div>
        <div class="container">
           
            <form @submit.prevent="buscar"> <!-- The submit.prevent blocks page loading when you click -->
                <input type="text" v-model="busca.nome" >
                <button class="waves-effect waves-light btn-small orange darken-1 right" style="bottom: 50px">Search</button>
            </form>

        
            <!-- Render input search -->

            <!-- 
            :items="deezer" -> Search results from the deezer API
            :headers="header" -> Called by the header function.
            no-data-text="" -> Remove standard text
            hide-default-footer -> remove standard events
            items-per-page="25" -> presents 25 results per page
            -->
            <v-data-table  
                  :items="deezer" 
                  :headers="header" 
                  no-data-text=""
                  hide-default-footer 
                  items-per-page="25">
                  
                  <template #item.artist="{ item }">
                      <a target="_blank" v-bind:href="item.artist.link" style="color: inherit">{{ item.artist.name }}</a>
                  </template>
                
                  <template #item.title="{ item }">
                      <a target="_blank" v-bind:href="item.link" style="color: inherit">{{ item.title }}</a>
                  </template>
                
                  <template #item.preview="{ item }">
                     <a :href="'' + item.link " target="_blank">
                        <button class="waves-effect btn-small orange darken-1 ouvir-musica"> OUVIR MUSICA </button>
                     </a>
                  </template>        
            </v-data-table>

              <ul class="pagination" style="padding-left: 46.19%;">
                <li class="waves-effect"><a @click="anterior"><i class="material-icons">chevron_left</i></a></li> <!-- Next Page  -->
                <li class="waves-effect"><a @click="proxima"><i class="material-icons">chevron_right</i></a></li> <!-- Returns Page  -->
              </ul>

        </div>
    </div>

    
</template>
<script>
  import Deezer from './../services/deezer' // Pull Deezer API
  import Pesquisas from './../services/pesquisas' // Pull Java API
  
  var moment = require('moment'); // 

  export default {
    data(){
      return { 
        busca: {nome:""},
        deezer: [],
        next: 0,
        moment,
        pag: 1,
        vazio: false,
        total: [],
        pesquisa: {
          nome: ''
        }
      }
    },

    computed: {
      header() {
        return [
          {text: 'Artista', sortable: false, value: 'artist', align: 'center'},
          {text: 'Música', sortable: false, value: 'title', align: 'center'},
          {text: 'Álbum', sortable: true, value: 'album.title', align: 'center'},
          {text: 'Rank', sortable: true, value: 'rank', align: 'center'},
          {text: 'Duração', sortable: false, value: 'duration', align: 'center'},
          {text: 'Link', sortable: false, value: 'preview', align: 'center'}
        ]
      }
    },

    methods: {

      listar() {
        Deezer.listar(this.busca.nome, this.next).then(res => {
          this.deezer = res.data.data
          this.total = res.data.total
          this.pesquisa.nome = this.busca.nome;
        }).catch(e => e)

      },

      buscar(){
        Deezer.buscar(this.buscar).then(() => {
          this.next = 0
          this.pag = 1
          this.salvar()
          this.listar()
          this.vazio = true
        }).catch(e => e)
      },

      salvar(){
        Pesquisas.salvar(this.busca.nome)
      },

      proxima(){
        if(this.busca.nome !== '' && this.next <= (this.total  - 24)){
          this.next += 25
          this.listar()
          this.somar()
        }
      },

      anterior(){
        if(this.next > 0){
          this.next -= 25
          this.listar()
          this.subtrair()
        }
      },

      somar(){
        this.pag++
      },

      subtrair(){
        this.pag--
      }
    }
  }
</script>

<style>



h2 {
   text-align: center;
}

form {
    margin-bottom: 30px;
}

.btn-play, .btn-busca {
    background-color: #FB8518;
    color: #fff;
}

.btn-play {
    margin-top: 8px;
}

.btn-play:hover, .btn-busca:hover {
    background-color: #8518fb;
    color: #fff;
    transition: all .35s ease-in-out;
}

.img-logo {
    margin-top: 30px;
    margin-bottom: 30px;
}

.img-logo img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}

input::placeholder {
    color: silver;
    font-style: italic;
    font-size: 1.2em;
    font-weight: lighter;
    text-align: center;
}

.arrow {
    margin-top: 20px;
}

.btn-arrow {
    background-color: #FB8518;
    color: #fff;
}

.btn-arrow:hover {
    background-color: #8518fb;
    color: #fff;
    transition: all .35s ease-in-out;
}

.ouvir-musica {
  margin-left: -40px;
  margin-bottom: 10px; 
}


</style>
<template>
    <div>
        <div class="container">
            <v-data-table
            :items="pesquisas"
            :headers="header"
            hide-default-footer >
            </v-data-table>
        </div>
        
    </div>  
</template>

<script>
var moment = require('moment');
import Pesquisa from '@/services/pesquisas'
    
    export default {
      data() {
        return {
          pesquisas: [],
          moment
        }
      },

    mounted () {  
    Pesquisa.relatorio().then(res => {
      this.pesquisas = res.data;
    
    })
  },

    computed: {
      header() {
        return [
          {text: 'Results', value: 'nome_pesquisa', align: 'center'},
          {text: 'Date | Time', value: 'data_pesquisa', align: 'center'}
        ]
      }
    }
}
</script>
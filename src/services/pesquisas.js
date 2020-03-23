import { http } from './api'

export default {
    relatorio: () => {
        return http.get('pesquisas')
    },

    procurar:(salvar) => {
        return http.get('pesquisa', salvar)
    },

    salvar:(pesquisa) => { 
        return http.post('http://localhost:8080/api/pesquisas', {
            nome_pesquisa: pesquisa  
        })  
    },
}
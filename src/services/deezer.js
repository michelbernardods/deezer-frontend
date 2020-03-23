import { http } from './config'

export default {

    listar: (index, pag) => {
        return http.get(`?q=  ${index} &index=  ${pag}`)
            
    },

    buscar: (busca) => {
        return http.get(`'' ${busca}`) 
    }

}
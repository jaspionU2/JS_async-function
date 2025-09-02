import { get } from "http"

export async function getAddress(CEP){
    const urlViaCep = `https://viacep.com.br/ws/${CEP}/json/`

    return fetch(urlViaCep)
    .then(response => response.json())
    .then((response) => {
        const minimalAddress = {
            logradouro: response.logradouro,
            bairro: response.bairro,
            localidade: response.localidade,
            estado: response.estado,
            regiao: response.regiao
        }
        return minimalAddress
    })
}

// async function imprimir(){
//     const resultado = await getAddress(42717250)
//     console.log(resultado)
// }

// imprimir()
import express from 'express'
import { getAddress } from './getAddress.js'
import { Pessoa } from './objPessoa.js'

const app = express()
const port = 3000

app.use(express.json());

app.post('/NewPeople/:cep', async (req, res) => {
    const person = req.body
    const cep = req.params.cep
    const address = await getAddress(cep)

    const newperson = new Pessoa(
        person.nome,
        person.idade,
        person.email,
        address
    )

    res.json({
        newperson
    })
})


app.listen(3000, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta 3000`)
})
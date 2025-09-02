import express from 'express'
import { getAddress } from './getAddress.js'
import { Pessoa } from './objPessoa.js'

const app = express()
const port = 3000

app.use(express.json());

const listaPessoas = []

app.get('/getPeople', (req, res) => {
    res.json(listaPessoas)
    console.log(listaPessoas)
})

app.post('/NewPeople/:cep', async (req, res) => {
    const person = req.body
    const cep = req.params.cep
    const address = await getAddress(cep)

    const newPerson = new Pessoa(
        person.nome,
        person.idade,
        person.email,
        address
    )

    listaPessoas.push(newPerson)

    res.json({
        newPerson
    })
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta 3000`)
})
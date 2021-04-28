const conexao = require('../infraestrutura/conexao')

class Pet {
  adiciona(pet, res) {
    const quer = 'INSERT INTO Pets SET ?'

    conexao.query(query, erro =>{
      if(erro) {
        console.log(erro)
        res.status(400).json(erro)
      } else {
        res.status(200).json(pets)
      }
    })
  }
}

module.exports = new Pet()
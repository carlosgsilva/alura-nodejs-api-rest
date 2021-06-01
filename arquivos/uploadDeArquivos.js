const fs = require('fs')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => 
{
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}`

    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(novoCaminho))
}
    
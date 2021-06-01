const fs = require('fs')

fs.createReadStream('./assets/salcicha.jpg')
    .pipe(fs.createWriteStream('./assets/salcicha-stream.jpg'))
    .on('finish', () => console.log('Imagem escrita com sucesso'))
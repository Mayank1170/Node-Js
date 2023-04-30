const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync( '../Content/Subfolder/first.txt', 'utf-8')
const second = readFileSync( '../Content/Subfolder/second.txt', 'utf-8')
console.log(first, second)

writeFileSync('../Content/resultFile.txt', `Here is the result ${first},${second}`,{ flag:'a' }) 
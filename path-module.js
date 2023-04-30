const { log } = require('console')
const path = require('path')

console.log(path.sep)


const Join = path.join('/Content', 'Subfolder', 'file.txt')
console.log(Join)


const base = path.basename(Join)
console.log(base)

const FullPath = path.resolve(__dirname, 'Content', 'file.txt')
console.log(FullPath)
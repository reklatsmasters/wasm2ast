const fs = require('fs')
const path = require('path')
const wasm2ast = require('..')

const file = fs.readFileSync(path.join(__dirname, './test.wasm'), null)

console.log(wasm2ast.parse(file))

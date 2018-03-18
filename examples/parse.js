const fs = require('fs')
const path = require('path')
const util = require('util')
const wasm2ast = require('..')

const file = fs.readFileSync(path.join(__dirname, './dtls.wasm'), null)

console.log(util.inspect(wasm2ast.parse(file), { depth: null }))

const { decode, createDecodeStream } = require('binary-data')
const { Module, Section } = require('types/wasm')

module.exports = {
  parse
}

function parse(buffer) {
  const sections = []

  const rstream = createDecodeStream(buffer)

  sections.push(decode(rstream, Module))

  while (rstream.length) {
    sections.push(decode(rstream, Section))
  }

  return sections
}

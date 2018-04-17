const { createDecodeStream } = require('binary-data')
const leb128 = require('types/leb128/signed')

test('decode', () => {
  const expectedNumber = -624485
  const buf = Buffer.from([0x9B, 0xF1, 0x59])
  const rstream = createDecodeStream(buf)

  const type = leb128(buf.length * 7 - 1)

  expect(type.decode(rstream).toNumber()).toEqual(expectedNumber)
})

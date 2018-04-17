const { createDecodeStream } = require('binary-data')
const uleb128 = require('types/leb128/unsigned')

test('decode', () => {
  const expectedNumber = 624485
  const buf = Buffer.from([0xE5, 0x8E, 0x26])
  const rstream = createDecodeStream(buf)

  const type = uleb128(buf.length * 7 - 1)

  expect(type.decode(rstream).toNumber()).toEqual(expectedNumber)
})

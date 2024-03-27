import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../arrayBufferConverter';

const buffer = getBuffer();
const converter = new ArrayBufferConverter();

test('Try to stringify loaded arraybuffer with ArrayBufferConverter', () => {
  const arrayBufferView = ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.toString(arrayBufferView)).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
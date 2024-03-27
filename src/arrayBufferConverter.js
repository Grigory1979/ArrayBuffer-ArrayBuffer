export default class ArrayBufferConverter {
    static load(buffer) {
      return new Uint16Array(buffer);
    }
  
    static toString(arrayBufferView) {
      let resultString = '';
      let i = 0;
  
      while (i < arrayBufferView.length) {
        resultString += String.fromCharCode(arrayBufferView[i]);
        i += 1;
      }
  
      return resultString;
    }
  }
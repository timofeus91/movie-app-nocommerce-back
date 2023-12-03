const encodeNumber = (num) => {
  if (num <= 95) {
    return String.fromCharCode(num + 31);
  } else {
    return '~' + String.fromCharCode(num - 96 + 31);
  }
};

const decodeNumber = (str) => {
  if (str[0] !== '~') {
    return str.charCodeAt(0) - 31;
  } else {
    return 95 + (str.charCodeAt(1) - 31);
  }
};

const serialize = (numbers) => numbers.map(encodeNumber).join('');

const deserialize = (str) => {
  const numbers = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '~') {
      numbers.push(decodeNumber(str[i]));
    } else {
      numbers.push(decodeNumber(str.slice(i, i + 2)));
      i++;
    }
  }
  return numbers;
};

const testSerialization = (numbers) => {
  const originalString = numbers.join(',');
  const serialized = serialize(numbers);
  const deserialized = deserialize(serialized);

  console.log(`Original: ${originalString}`);
  console.log(`Serialized: ${serialized}`);
  console.log(`Deserialized: ${deserialized.join(',')}`);
  console.log(
    `Compression Ratio: ${(originalString.length / serialized.length).toFixed(
      2,
    )}`,
  );
};

const generateNumbersArray = (maxNumber = 300, maxLength = 1000) => {
  const length = Math.floor(Math.random() * maxLength) + 1;
  const numbersArray = [];

  for (let i = 0; i < length; i++) {
    const number = Math.floor(Math.random() * maxNumber) + 1;
    numbersArray.push(number);
  }

  return numbersArray;
};

testSerialization(generateNumbersArray());

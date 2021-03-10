module.exports = function toReadable (number) {

    console.log(number);

    const unicNames = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      };
      
      const unicNamesOfDecades = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
      };
      
      let result;
      let numberToArray = String(number).split('').reverse();
      let rank = numberToArray.length;
      

      if (number < 20 && number >= 0) {
        result = unicNames[number];
      } else if (rank === 2) {
        if (+numberToArray[0] === 0) {
          result = unicNamesOfDecades[numberToArray[1]];
        } else {
          result = `${unicNamesOfDecades[numberToArray[1]]} ${unicNames[numberToArray[0]]}`;
        }
      } else if (rank === 3) {
        if (number % 100 === 0) {
          result = `${unicNames[numberToArray[2]]} hundred`;
        } else if (number % 10 === 0) {
          result = `${unicNames[numberToArray[2]]} hundred ${unicNamesOfDecades[numberToArray[1]]}`;
        } else if (+numberToArray[1] === 0) {
          result = `${unicNames[numberToArray[2]]} hundred ${unicNames[numberToArray[0]]}`
        } else { 
            if (+numberToArray[1] === 1) {
                result = `${unicNames[numberToArray[2]]} hundred ${unicNames[+numberToArray[0] + 10]}`
            } else {
                result = `${unicNames[numberToArray[2]]} hundred ${unicNamesOfDecades[numberToArray[1]]} ${unicNames[numberToArray[0]]}`;
            }
        }
      } else {
        result = 'TOO MUCH'
      }

      return result;
}

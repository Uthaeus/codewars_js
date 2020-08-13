// Complete the function to convert an integer into a string of the Turkish name.


const getTurkishNumber = (num) => {
  let converter = {
    0 : 'sıfır',
    1 : 'bir',
    2 : 'iki',
    3 : 'üç',
    4 : 'dört',
    5 : 'beş',
    6 : 'altı',
    7 : 'yedi',
    8 : 'sekiz',
    9 : 'dokuz',

    10 : 'on',
    20 : 'yirmi',
    30 : 'otuz',
    40 : 'kırk',
    50 : 'elli',
    60 : 'altmış',
    70 : 'yetmiş',
    80 : 'seksen',
    90 : 'doksan'
  }
  let pre = Math.floor(num / 10) * 10;

  let post = num % 10;

  if (num < 10) {
    return converter[num];
  } else {
    if (post == 0) {
      return converter[pre];
    } else {
      return `${converter[pre]} ${converter[post]}`;
    }
  }
}


console.log(getTurkishNumber(70)); // yirmi alti
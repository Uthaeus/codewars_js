function telephoneCheck(str) {
  // Good luck!
  let reg = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
  

  return reg.test(str);
}

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("1 555 555 5555"));




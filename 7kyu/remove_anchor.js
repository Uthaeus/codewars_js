// Complete the function/method so that it returns the url with anything after the anchor (#) removed.


function removeUrlAnchor(url){
  let arr = url.split('.');
  let last = arr[arr.length -1].split('#')[0];

  arr[arr.length - 1] = last;

  return arr.join('.');
}



console.log(removeUrlAnchor('www.codewars.com#about')); //, 'www.codewars.com')
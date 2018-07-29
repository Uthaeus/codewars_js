// Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.


function dBScale(intensity) {
  return 10*Math.log10(intensity/1e-12);
}



console.log(Math.round(dBScale(Math.pow(10, -11)))) //, 10)
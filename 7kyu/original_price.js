// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.


function discoverOriginalPrice(discountedPrice, salePercentage){
  // ...
  let dis = (100 - salePercentage) / 100;
  let result = discountedPrice / dis 
  return Math.round(result * 100) / 100;
}



console.log(discoverOriginalPrice(75.75, 25)); //,101)
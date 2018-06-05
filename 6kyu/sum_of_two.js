
// Task
// Given Two intgers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

function add(x, y)
{
    return 0 // Do your magic!
}

console.log(add(5,19)) //, 24)






// while (y != 0):
     
//         # carry now contains common
//         # set bits of x and y
//         carry = x & y
 
//         # Sum of bits of x and y where at
//         # least one of the bits is not set
//         x = x ^ y
 
//         # Carry is shifted by one so that   
//         # adding it to x gives the required sum
//         y = carry << 1
     
//     return x
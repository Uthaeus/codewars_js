// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns an object with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255


function hexStringToRGB(hexString) {
    // split string into three components
    let hexArr = [];
    let rgb = {'r':0, 'g':0, 'b':0}

    for (let x = 1; x < hexString.length; x += 2) {
        let temp = hexString.slice(x, x + 2);
        hexArr.push(temp);
    }
    // translate hex values to rgb
    for (let x = 0; x < hexArr.length; x++) {
        if (x == 0) {
            rgb['r'] = parseInt(hexArr[x], 16);
        } else if (x == 1) {
            rgb['g'] = parseInt(hexArr[x], 16);
        } else {
            rgb['b'] = parseInt(hexArr[x], 16);
        }
    }

    return rgb;
}


console.log(hexStringToRGB("#FF9933")); //, {r:255, g:153, b:51}))
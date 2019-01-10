// A bird flying high above a mountain range is able to estimate the height of the highest peak.


var peakHeight = function(mountain) {
    let lines = [], max = 0, starts = [];
    mountain.forEach(a => lines.push(a.join('').trim()));
    mountain.forEach(a => starts.push(a.indexOf('^')));
    let start = Math.max(...starts);
    
    for (var x = 0; x < lines.length; x++) {
        let mid = Math.floor(lines[x].length / 2);
        if (mid > max) {
            max = mid;
        }

    }
    return max - start;
}


var show = function(m) {
    for (var y = 0; y < m.length; y++) {
      console.log(m[y].join(''));
    }
    return m;
}


var mountain = [
    "^^^^^^        ".split(''),
    " ^^^^^^^^     ".split(''),
    "  ^^^^^^^     ".split(''),
    "  ^^^^^       ".split(''),
    "  ^^^^^^^^^^^ ".split(''),
    "  ^^^^^^      ".split(''),
    "  ^^^^        ".split('')
];

console.log(peakHeight(show(mountain))); //, 3)
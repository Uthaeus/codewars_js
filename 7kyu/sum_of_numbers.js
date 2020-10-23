// We want to generate a function that computes the series starting from 0 and ending until the given number.


var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
        if (count < 0) return `${count}<0`;
        let text = '', numArr = []

        for (let x = 0; x <= count; x++) {
            text += x.toString();
            numArr.push(x);
            if (x == count) {
                text += ` = ${numArr.reduce((a, b) => a += b)}`;
            } else {
                text += '+';
            }
        }
        return text;
    };
  
    return SequenceSum;
  
})();


console.log(SequenceSum.showSequence(6)); //,"0+1+2+3+4+5+6 = 21")
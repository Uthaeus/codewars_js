function convert(num){
    num = parseInt(num);

    if (num > 3999999) { alert('Number is too big!'); return false; }
    if (num < 1) { alert('Number is too small!'); return false; }

    var result = '',
        ref = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'],
        xis = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    if (num <= 3999999 && num >= 4000) {
        num += ''; // need to convert to string for .substring()
        result = '<label style="text-decoration: overline;">'+convert(num.substring(0,num.length-3))+'</label>';
        num = num.substring(num.length-3);
    }

    for (x = 0; x < ref.length; x++){
        while(num >= xis[x]){
            result += ref[x];
            num -= xis[x];
        }
    }
    return result;
}


console.log(convert(55)); // LV
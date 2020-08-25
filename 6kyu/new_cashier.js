// The kitchen staff expect the items to be in the same order as they appear in the menu.


function getOrder(input) {
    let checks = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    let menu = [
        [1, 'Burger'],
        [2, 'Fries'],
        [3, 'Chicken'],
        [4, 'Pizza'],
        [5, 'Sandwich'],
        [6, 'Onionrings'],
        [7, 'Milkshake'],
        [8, 'Coke']
    ];
    let result = [];

    for (let x = 0; x < input.length; x++) {
        
        for (let y = 0; y < menu.length; y++) {
            let temp = input.slice(x, x + checks[y].length);
            if (temp == checks[y]) {
                result.push(menu[y]);
                x += temp.length - 1;
                break;
            }
        }
    }
    sortedArr = result.sort((a, b) => a[0] > b[0]);
    let realResult = [];

    for (let x = 0; x < sortedArr.length; x++) {
        realResult.push(sortedArr[x][1]);
    }

    return realResult.join(' ');
}


console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke")
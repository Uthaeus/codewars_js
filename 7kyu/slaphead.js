// You should return the original string, but with any stray hairs removed. Keep count of them though, as there is a second element you need to return:
// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"


function bald(x){
    let arr = x.split('');
    let hairs = 0, name;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '/') {
            hairs++;
            arr.splice(i, 1, '-');
        }
    }

    switch(hairs) {
        case 0: 
            name = 'Clean!';
            break;
        case 1:
            name = 'Unicorn!';
            break;
        case 2:
            name = 'Homer!';
            break;
        case 3:
        case 4:
        case 5:
            name = 'Careless!';
            break;
        default:
            name = 'Hobo!';
    }
    let result = [arr.join(''), name];
    return result;
}



console.log(bald('/-----/-')); //, ['--------', 'Homer!'])
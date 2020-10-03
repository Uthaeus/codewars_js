// Using a map given to Solomon by Chronixus, you must find Goromon's precise location


function solomonsQuest(ar){
    let x = 0, y = 0;
    let timeDilation = 0;

    for (let t = 0; t < ar.length; t++) {
        for (let m = 0; m < ar[t].length - 1; m++) {
            if (m == 0) {
                timeDilation += ar[t][m];
            } else if (m == 1) {
                if (ar[t][m] == 0) {
                    y += ar[t][m + 1] * Math.pow(2, timeDilation);
                } else if (ar[t][m] == 1) {
                    x += ar[t][m + 1] * Math.pow(2, timeDilation);
                } else if (ar[t][m] == 2) {
                    y -= ar[t][m + 1] * Math.pow(2, timeDilation);
                } else {
                    x -= ar[t][m + 1] * Math.pow(2, timeDilation);
                }
            }
        }
    }
    return [x, y];
}


let map1 = [[1,3,5],[2,0,10],[-3,1,4],[4,2,4],[1,1,5],[-3,0,12],[2,1,12],[-2,2,6]];
let map2 = [[4,0,8],[2,1,2],[1,0,5],[-3,3,16],[2,2,2],[-1,1,7],[0,0,5],[-4,3,14]];
let map3 = [[1,1,20],[1,2,30],[1,3,8],[1,0,2],[1,1,6],[1,2,4],[1,3,6],[-7,0,100]];
let map4 = [[2,2,100],[3,1,25],[4,0,8],[-6,3,25],[-1,2,80],[8,0,12],[-10,3,220],[0,1,150]];


console.log(solomonsQuest(map1)); //,[346,40]
console.log(solomonsQuest(map3)); //,[-600,-244]
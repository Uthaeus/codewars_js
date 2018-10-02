// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.


function inviteMoreWomen(L) {
    //coding and coding..
    return L.reduce((a, b) => a += b) > 0 ? true : false;
    
    
}



console.log(inviteMoreWomen([1, 1, 1])); //,true)
console.log(inviteMoreWomen([-1, -1, -1])); //,false)
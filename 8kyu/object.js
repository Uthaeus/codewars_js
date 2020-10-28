// Give you a function animal, accept 1 parameter:obj like this


function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}


console.log(animal({name:"dog",legs:4,color:"white"})); //,"This white dog has 4 legs."
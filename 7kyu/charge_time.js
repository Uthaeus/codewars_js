// To charge your mobile phone battery, do you know how much time it takes from 0% to 100%? It depends on your cell phone battery capacity and the power of the charger. A rough calculation method is:


function calculateTime(battery,charger){
    let fast = (battery * 0.85) / charger;
    let mid = (battery * 0.1) / (charger * 0.5);
    let end = (battery * 0.05) / (charger * 0.2);
    
    let result = fast + mid + end;
    console.log(result);
    return +result.toFixed(2);
}



console.log(calculateTime(1500,500)); // ,3.9)
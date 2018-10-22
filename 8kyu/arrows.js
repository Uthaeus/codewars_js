// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.


// function anyArrows(arrows){
//     // arrow it
//     return arrows.some( => );
// }



console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]));
//, true, "Should handle quiver with undamaged arrows")
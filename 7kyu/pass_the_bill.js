// In each test case the makeup of the Parliament will be different . In some cases your party may make up the majority of parliament, and in others it may make up the minority. If your party is the majority, you may find that you do not neeed any independants to vote in favor of your bill in order for it to pass . If your party is the minority, it may be possible that there are not enough independants for your bill to be passed . If it is impossible for your bill to pass, return -1.


function passTheBill(totalMembers, conservativePartyMembers, reformistPartyMembers) {
  //coding and coding..
  let votesNeeded = Math.floor(totalMembers / 2) + 1;
  let independants = (totalMembers - (conservativePartyMembers + reformistPartyMembers));

  if (conservativePartyMembers + independants < votesNeeded) {
    return -1;
  } else if (conservativePartyMembers >= votesNeeded) {
    return 0;
  } else {
    return votesNeeded - conservativePartyMembers;
  }
}



console.log(passTheBill(11,4,1)); //,2)
console.log(passTheBill(11,4,6)); //,-1)
console.log(passTheBill(7,4,3)) //,0)
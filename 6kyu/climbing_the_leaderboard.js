// This kata uses Dense Ranking, so any identical scores count as the same rank (e.g, a scoreboard of [100, 97, 97, 90, 82, 80, 72, 72, 60] corresponds with rankings of [1, 2, 2, 3, 4, 5, 6, 6, 7]

// You are given an array, scores, of leaderboard scores, descending, and another array, kara, representing Kara's Codewars score over time, ascending. Your function should return an array with each item corresponding to the rank of Kara's current score on the leaderboard.

Array.prototype.unique = function() {
  return Array.from(new Set(this));
}

function climbingLeaderboard(scores, kara) {
  scores = scores.unique();
  scores.push(...kara)
  scores.sort((a, b) => b - a);
  var results = [];

  console.log(scores);

  for (var i = 0; i < kara.length; i++) {
    results.push(scores.indexOf(kara[i]));
  }

  // for (var x = 0; x < kara.length; x++) {
  //   for (var y = 0; y < scores.length; y++) {
  //     if (kara[x] < scores[scores.length - 1]) {
  //       results.push(scores.length + 1);
  //       break;
  //     }
  //     if (kara[x] >= scores[y]) {
  //       results.push(y + 1);
  //       break;
  //     }
  //   }
  // }
  return results;
}



console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105])) //, [4, 3, 1])
//console.log(climbingLeaderboard([982, 490, 339, 180], [180, 250, 721, 2500])) //, [4, 4, 2, 1])
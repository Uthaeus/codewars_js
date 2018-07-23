// You must finish the Pong class. It has a constructor which accepts the maximum score a player can get throughout the game, and a method called play. This method determines whether the current player hit the ball or not, i.e. if the paddle is at the sufficient height to hit it back. There're 4 possible outcomes: player successfully hits the ball back, player misses the ball, player misses the ball and his opponent reaches the maximum score winning the game, either player tries to hit a ball despite the game being over. You can see the input and output description in detail below.



class Pong {
  constructor(maxScore) {
    this.maxScore = maxScore;
    this.turn = 1;
    this.p1_score = 0;
    this.p2_score = 0;
  }
  
  play(ballPos, playerPos) {
    if (ballPos <= playerPos + 3 && ballPos >= playerPos -3) {
      if (this.turn % 2 != 0) {
        return "Player 1 has hit the ball!";
      } else {
        return "Player 2 has hit the ball!";
      }
      this.turn++;
    } else {
      if (this.turn % 2 != 0) {
        this.p2_score++;
        if (this.p2_score == this.maxScore) {
          return "Player 2 has won the game!";
        } else {
          return "Player 1 has missed the ball!";
        }
      } else {
        this.p1_score++;
        if (this.p1_score == this.maxScore) {
          return "Player 1 has won the game!";
        } else {
          return "Player 2 has missed the ball!";
        }
      }
    }
  }

  
}






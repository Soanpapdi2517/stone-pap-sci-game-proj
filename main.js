        let scorestreak = localStorage.getItem("Score");
        let score;
        resetscore(scorestreak);
        function resetscore(scorestreak) {
          score = scorestreak
            ? JSON.parse(scorestreak)
            : {
                win: 0,
                lose: 0,
                tie: 0,
              };

          score.displayscore = function () {
            return `won 🏆 ${this.win}, lose👎🏼 ${this.lose}, tie❓ ${this.tie}
            total rounds: ${this.win + this.lose + this.tie}`;
          };
          showresults();
        }
        let buttonClick_times = {
          Stone: 0,
          Paper: 0,
          Scissor: 0,
        };

        const userChoiceMsg = "You have choosen";
        function gen_computer_choice() {
          let randomNumber = Math.random() * 3;
          if (randomNumber > 0 && randomNumber <= 1) {
            return "🪨";
          } else if (randomNumber > 1 && randomNumber <= 2) {
            return "📄";
          } else {
            return "✂️";
          }
        }
        function userChoiceCheck(computerMove, userMove) {
          if (userMove === "🪨") {
            buttonClick_times.Stone++;
            if (computerMove === "✂️") {
              score.win += 1;
              return "You won";
            } else if (computerMove === "📄") {
              score.lose += 1;
              return "You lost";
            } else {
              score.tie += 1;
              return `it's a tie`;
            }
          } else if (userMove === "📄") {
            buttonClick_times.Paper++;
            if (computerMove === "📄") {
              score.tie += 1;
              return "its tie";
            } else if (computerMove === "✂️") {
              score.lose += 1;
              return "You lost";
            } else {
              score.win += 1;
              return `you won`;
            }
          }

          if (userMove === "✂️") {
            buttonClick_times.Scissor++;
            if (computerMove === "📄") {
              score.win += 1;
              return "you won";
            } else if (computerMove === "🪨") {
              score.lose += 1;
              return "You lost";
            } else {
              score.tie += 1;
              return `it's a tie`;
            }
          }
        }
        function showresults(computerMove, userMove, result) {
          localStorage.setItem("Score", JSON.stringify(score));
          document.querySelector(".result-banner").innerText =
            userMove === undefined &&
            computerMove === undefined &&
            result === undefined
              ? `${score.displayscore()}`
              : `You have chosen: ${userMove}
          Computer have chosen: ${computerMove}
          your result is: ${result}
          ${score.displayscore()}`;
        }
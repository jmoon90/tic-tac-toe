var first_row = [" "," "," "];
var second_row = [" "," "," "];
var third_row = [" "," "," "];

var computer_wins = 'xxx';
var player_wins = 'ooo';
var state = []; // current state of board
var firstTurn = ''

//var counter = Math.floor((Math.random()*2)+1);
var counter = 1;
var players = ['o','x'];

function placePiece(i,s) {
  counter++;
  var r = i+1;
  $('#row'+r+ ' .span-'+s).hide();
  $('#row'+r+ ' .span-'+s)[0].innerHTML = 'x';
  $('#row'+r+ ' .span-'+s).fadeIn(1000);
  push_to_state();
  if(state.length == 6) {
    state.splice(0, 3);
  }
  return new checkIfAnyoneCanWin();
}

function checkIfAnyoneCanWin() {
  if(state.length != 0){
    this.checkRow();
    this.checkColumn();
    this.checkDiagonal();
    return this.checkTie();
  }
}

checkIfAnyoneCanWin.prototype = {
  constructor:checkIfAnyoneCanWin,
  checkTie:function() {
    i = 1
    var space_left = 0
    while(i < 4) {
      for(n = 0; n < 3; n++) {
        if($("#row" + i).text()[n] == " ") {
          space_left++;
        }
      };
      i++;
    };
    if(space_left == 0) {
      answer = confirm("Tie game! Nobody wins. Play again?") 
      if(answer == true){
        newGame();
      };
    };
  },
  checkRow:function() {
    if($("#row1").text() == computer_wins || $("#row2").text() == computer_wins || $("#row3").text() == computer_wins) {
      answer = confirm("Computer wins. Play again?");
      if(answer == true){
        newGame();
      }
    } else {
      return
    };
  },
  checkColumn:function() {
    i = 0
    while(i < 3) {
      var column = state[0][i] + state[1][i] + state[2][i]
      if(column == computer_wins) {
        answer = confirm("Computer wins. Play again?");
        if(answer == true){
          newGame();
        };
      };
      i++
    }
  },
  checkDiagonal:function() {
    var diagonal_right = state[0][0] + state[1][1] + state[2][2]
    var diagonal_left = state[0][2] + state[1][1] + state[2][0]
    if(diagonal_right == computer_wins || diagonal_left == computer_wins) {
      answer = confirm("Computer wins. Play Again?");
      if(answer == true){
        newGame();
      };
    }
  }
}

//class where computer places piece
function AI(i, p) {
  if(state.length == 6) {
    state.splice(0, 3);
  }
  this.checkRowIfSomeoneCanWin(i, p);
  this.checkColumnIfSomeoneCanWin(i, p);
  this.checkDiagonalIfSomeoneCanWin(i, p);
}
AI.prototype = {
  constructor:AI,
  checkRowIfSomeoneCanWin:function(i, p) {
    if(state[i] == " " +p +p) {
      return placePiece(i, 0);
    } else if(state[i] == p+ " " +p) {
      return placePiece(i, 1);
    } else if(state[i] == p+ p+" ") {
      return placePiece(i, 2);
    };
  },
  checkColumnIfSomeoneCanWin:function(i, p) {
    if([state[0][i] == p && state[1][i] == p && state[2][i]] == " ") {
      return placePiece(2,i)
    } else if([state[0][i] == p && state[1][i] == " " && state[2][i]] == p) {
      return placePiece(1,i)
    } else if([state[0][i] == " " && state[1][i] == p && state[2][i]] == p) {
      return placePiece(0,i)
    }
  },
  checkDiagonalIfSomeoneCanWin:function(i, p) {
    if(state[0] == undefined){
      return;
    } else {
      if([state[0][0] == " " && state[1][1] == p && state[2][2]] == p) {
        return placePiece(0, 0);
      } else if([state[0][0] == p && state[1][1] ==" " && state[2][2]] == p) {
        return placePiece(1, 1);
      } else if([state[0][0] == p && state[1][1] == p && state[2][2]] == " ") {
        return placePiece(2, 2);
      } else if([state[2][0] == " " && state[1][1] == p && state[0][2]] == p) {
        return placePiece(2, 0);
      } else if([state[2][0] == p && state[1][1] ==" " && state[0][2]] == p) {
        return placePiece(1, 1);
      } else if([state[2][0] == p && state[1][1] == p && state[0][2]] == " ") {
        return placePiece(0, 2);
      };
    };
  },
  noPlayersHaveAdjacentPieces:function(i, p) {
    i = 0;
    while(i < 4) {
      if(state[1][1] == " ") {
        return placePiece(1, 1);
      } else {
        for(n = 0; n < 3; n++) {
          if(state[n] == "  "+p) {
            return placePiece(n, 1);
          } else if(state[n] == " "+p+" ") {
            return placePiece(n, 0);
          } else if(state[n] == p+"  ") {
            return placePiece(n, 2);
          }
        }
      }
      if([state[0][i] == " " && state[1][i] ==" " && state[2][i]] == p) {
        return placePiece(1,i);
      } else if([state[0][i] == p && state[1][i] ==" " && state[2][i]] == " ") {
        return placePiece(1,i);
      } else if([state[0][i] == " " && state[1][i] == p && state[2][i]] == " ") {
        return placePiece(0,i);
      } else if([state[0][i] == " " && state[1][i+1] == p && state[2][i+2]] == " ") {
        return placePiece(0,i);
      } else if([state[2][i] == " " && state[1][i+1] == p && state[1][i+2]] == " ") {
        return placePiece(2,i);
      };
      if([state[0][0] == " " && state[1][1] == " " && state[2][2]] == p){
        placePiece(2, 2);
      } else if([state[0][0] == " " && state[1][1] == p && state[2][2]] == " ") {
        placePiece(1, 1);
      } else if([state[0][0] == p && state[1][1] == " " && state[2][2]] == " ") {
        placePiece(0, 0);
      };
      i++;
    };
  }
}

function computerMoves(){
  var x = 'x'
  var o = 'o';
  ai = new AI();

  if(state.length == 6) {
    state.splice(0, 3);
  } else if (state.length == 9) {
    state.splice(0, 6);
  };
  i = 0
  while(i < 4) {
    if(state.length != 0) {
      //Call AI class function to check if someone can win
      new AI(i, x);
      i++;
    }
  };

  i = 0
  while(i < 4) {
    if(counter % 2 == 0) {
      return;
    } else {
      new AI(i, o);
    }
    i++;
  };
  if(counter % 2 == 0) {
    return;
  } else {
    ai.noPlayersHaveAdjacentPieces(i, x);
    if(counter % 2 != 0) {
      ai.noPlayersHaveAdjacentPieces(i, o);
    };
  }
}

function pageLoad() {
  if(counter == 3){
    if(firstTurn == 'computer') {
      if($("#row3 .span-2").text() == " ") {
        return placePiece(2, 2);
      } else {
        return placePiece(1, 0);
      };
    } else {
      for(i = 0; i < 3; i++) {
        if(state[i] == " o ") {
          return placePiece(i, 0);
        };
      };
      return placePiece(1, 1);
    };
  } else if(counter == 5) {
    computerMoves();
  } else if(counter == 7) {
    computerMoves();
  } else if(counter == 9) {
    if(firstTurn == 'computer') {
      computerMoves();
    } else {
      computerMoves();
    };
  } else if (counter == 11) {
    return new checkIfAnyoneCanWin();
  };
}
pageLoad.prototype = {
  constructor:pageLoad,
  firstMove:function() {
    if(players[counter % 2] == 'x'){
      alert("Computer goes first");
      firstTurn = 'computer';
      placePiece(0,0);
    } else {
      firstTurn = 'player'
      alert("Player goes first");
    };
  }
};


function push_to_state() {
  state.push($("#row1").text());
  state.push($("#row2").text());
  state.push($("#row3").text());
}

function renderBoard() {
  var row_1 = document.getElementById('row1');
  var row_2 = document.getElementById('row2');
  var row_3 = document.getElementById('row3');

  this.rows = [row_1, row_2, row_3];
  this.board = [first_row, second_row, third_row];

  if($('#row1 .span-1').length == 0) {
    for(var row in rows) {
      for(i = 0; i < 3; i++) {
        var span = $('<span>').addClass('square span-'+i).html(board[row][i]);
        $( '#row'+(Number(row)+1)).append(span);
      };
    };
  };
}

function gamePlay() {
  this.board();
}
gamePlay.prototype = {
  constructor: gamePlay,
  board:function() {
    $(function(){
      renderBoard();
      $(".row span").on('click',function(e){
        if($(e.currentTarget).text() === " ") {
          this.innerHTML = players[counter % 2];
          push_to_state();
        } else {
          if($(e.currentTarget).text() === "o"){
            counter = counter++;
          } else {
            counter = counter - 1;
          };
        };
      });
    });
  }
}


function countClick() {
  counter++;
};

function newGame() {
  new gamePlay()
  if($('#row1 .span-1').length != 0) {
    for(r = 1; r < 4; r++) {
      for(i = 0; i < 3; i++) {
        $('#row'+r+ ' .span-'+i)[0].innerHTML = ' '
      };
    };
  }
  state = []
  if(state.length == 0){
    counter = 2;
  }
}

newGame();
playGame = new pageLoad();
playGame.firstMove();

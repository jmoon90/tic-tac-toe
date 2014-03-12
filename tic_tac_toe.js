
//var counter = Math.floor((Math.random()*2)+1);
var counter = 1;
var players = ['o','x'];

function RenderBoard() {
  this.state = [];
  this.updateState();
}
RenderBoard.prototype = {
  constructor: RenderBoard,
  updateState:function() {
    this.state.push($("#row1").text());
    this.state.push($("#row2").text());
    this.state.push($("#row3").text());
  },
  placePiece:function(i, s) {
    counter++;
    var r = i+1;
    $('#row'+r+ ' .span-'+s).hide();
    $('#row'+r+ ' .span-'+s)[0].innerHTML = 'x';
    $('#row'+r+ ' .span-'+s).fadeIn(1000);
    return new CheckGameResult();
  }
  return new checkIfAnyoneCanWin();
}

function CheckGameResult() {
    this.computer_wins = 'xxx';
    boardState = new RenderBoard();
    this.checkRow();
    this.checkColumn();
    this.checkDiagonal();
    return this.checkTie();
}
CheckGameResult.prototype = {
  constructor:CheckGameResult,
  checkTie:function() {
    i = 0
    var space_left = 0
    while(i < 3) {
      for(n = 0; n < 3; n++) {
        if(boardState.state[i][n] == " ") {
          space_left++;
        }
      };
      i++;
    };
    if(space_left == 0) {
      answer = confirm("Tie game! Nobody wins. Play again?") 
      if(answer == true){
        new Game;
      };
    };
  },
  checkRow:function() {
    if(boardState.state[0] == this.computer_wins || boardState.state[1] == this.computer_wins || boardState.state[2] == this.computer_wins) {
      answer = confirm("Computer wins. Play again?");
      if(answer == true){
        new Game;
      }
    } else {
      return
    };
  },
  checkColumn:function() {
    i = 0
    while(i < 3) {
      var column = boardState.state[0][i] + boardState.state[1][i] + boardState.state[2][i]
      if(column == this.computer_wins) {
        answer = confirm("Computer wins. Play again?");
        if(answer == true){
          new Game;
        };
      };
      i++
    }
  },
  checkDiagonal:function() {
    var diagonal_right = boardState.state[0][0] + boardState.state[1][1] + boardState.state[2][2]
    var diagonal_left = boardState.state[0][2] + boardState.state[1][1] + boardState.state[2][0]
    if(diagonal_right == this.computer_wins || diagonal_left == this.computer_wins) {
      answer = confirm("Computer wins. Play Again?");
      if(answer == true){
        new Game;
      };
    }
  }
}

//class where computer places piece
function AI(i, p) {
  if(boardState.state.length == 6) {
    boardState.state.splice(0, 3);
  }
  boardState = new RenderBoard();
  this.checkRowIfSomeoneCanWin(i, p);
  this.checkColumnIfSomeoneCanWin(i, p);
  this.checkDiagonalIfSomeoneCanWin(i, p);
}
AI.prototype = {
  constructor:AI,
  checkRowIfSomeoneCanWin:function(i, p) {
    if(boardState.state[i] == " " +p +p) {
      return boardState.placePiece(i, 0);
    } else if(boardState.state[i] == p+ " " +p) {
      return boardState.placePiece(i, 1);
    } else if(boardState.state[i] == p+ p+" ") {
      return boardState.placePiece(i, 2);
    };
  },
  checkColumnIfSomeoneCanWin:function(i, p) {
    if([boardState.state[0][i] == p && boardState.state[1][i] == p && boardState.state[2][i]] == " ") {
      return boardState.placePiece(2,i)
    } else if([boardState.state[0][i] == p && boardState.state[1][i] == " " && boardState.state[2][i]] == p) {
      return boardState.placePiece(1,i)
    } else if([boardState.state[0][i] == " " && boardState.state[1][i] == p && boardState.state[2][i]] == p) {
      return boardState.placePiece(0,i)
    }
  },
  checkDiagonalIfSomeoneCanWin:function(i, p) {
    if(boardState.state[0] == undefined){
      return;
    } else {
      if([boardState.state[0][0] == " " && boardState.state[1][1] == p && boardState.state[2][2]] == p) {
        return boardState.placePiece(0, 0);
      } else if([boardState.state[0][0] == p && boardState.state[1][1] ==" " && boardState.state[2][2]] == p) {
        return boardState.placePiece(1, 1);
      } else if([boardState.state[0][0] == p && boardState.state[1][1] == p && boardState.state[2][2]] == " ") {
        return boardState.placePiece(2, 2);
      } else if([boardState.state[2][0] == " " && boardState.state[1][1] == p && boardState.state[0][2]] == p) {
        return boardState.placePiece(2, 0);
      } else if([boardState.state[2][0] == p && boardState.state[1][1] ==" " && boardState.state[0][2]] == p) {
        return boardState.placePiece(1, 1);
      } else if([boardState.state[2][0] == p && boardState.state[1][1] == p && boardState.state[0][2]] == " ") {
        return boardState.placePiece(0, 2);
      };
    };
  },
  noPlayersHaveAdjacentPieces:function(i, p) {
    i = 0;
    while(i < 4) {
      if(boardState.state[1][1] == " ") {
        return boardState.placePiece(1, 1);
      } else {
        for(n = 0; n < 3; n++) {
          if(boardState.state[n] == "  "+p) {
            return boardState.placePiece(n, 1);
          } else if(boardState.state[n] == " "+p+" ") {
            return boardState.placePiece(n, 0);
          } else if(boardState.state[n] == p+"  ") {
            return boardState.placePiece(n, 2);
          }
        }
      }
      if([boardState.state[0][i] == " " && boardState.state[1][i] ==" " && boardState.state[2][i]] == p) {
        return boardState.placePiece(1,i);
      } else if([boardState.state[0][i] == p && boardState.state[1][i] ==" " && boardState.state[2][i]] == " ") {
        return boardState.placePiece(1,i);
      } else if([boardState.state[0][i] == " " && boardState.state[1][i] == p && boardState.state[2][i]] == " ") {
        return boardState.placePiece(0,i);
      } else if([boardState.state[0][i] == " " && boardState.state[1][i+1] == p && boardState.state[2][i+2]] == " ") {
        return boardState.placePiece(0,i);
      } else if([boardState.state[2][i] == " " && boardState.state[1][i+1] == p && boardState.state[1][i+2]] == " ") {
        return boardState.placePiece(2,i);
      };
      if([boardState.state[0][0] == " " && boardState.state[1][1] == " " && boardState.state[2][2]] == p){
        boardState.placePiece(2, 2);
      } else if([boardState.state[0][0] == " " && boardState.state[1][1] == p && boardState.state[2][2]] == " ") {
        boardState.placePiece(1, 1);
      } else if([boardState.state[0][0] == p && boardState.state[1][1] == " " && boardState.state[2][2]] == " ") {
        boardState.placePiece(0, 0);
      };
      for(r=0; r < 3; r++) {
        for(i = 0; i < 3; i++) {
          if(boardState.state[r][i] == " ") {
            boardState.placePiece(r,i);
          }
        }
      }
      i++;
    };
  }
}

function computerMoves(){
  var x = 'x'
  var o = 'o';
  ai = new AI();

  if(boardState.state.length == 6) {
    boardState.state.splice(0, 3);
  } else if (boardState.state.length == 9) {
    boardState.state.splice(0, 6);
  };
  i = 0
  while(i < 4) {
    if(boardState.state.length != 0) {
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

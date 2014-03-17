function Game() {
  $(function(){
    new Board();
  });
}

Game.prototype = {
  constructor:Game,
  firstMove:function() {
    if(players[counter % 2] == 'x'){
      alert("Computer goes first");
      firstTurn = 'computer';
      boardState.placePiece(0,0);
    } else {
      firstTurn = 'player'
      alert("Player goes first");
    };
  }
};

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
}

function Board() {
  this.initialBoard();
  this.newBoard();
  game.firstMove();
}

Board.prototype = {
  constructor: Board,
  initialBoard: function() {
    var row_1 = document.getElementById('row1'),
        row_2 = document.getElementById('row2'),
        row_3 = document.getElementById('row3'),
        first_row = [" "," "," "],
        second_row = [" "," "," "],
        third_row = [" "," "," "],
        rows = [row_1, row_2, row_3],
        board = [first_row, second_row, third_row];
    if($('#row1 .span-1').length == 0) {
      for(var row in rows) {
        for(i = 0; i < 3; i++) {
          var span = $('<span>').addClass('square span-'+i).html(board[row][i]);
          $( '#row'+(Number(row)+1)).append(span);
        };
      };
    };
    $(".row span").on('click',function(e){
      if($(e.currentTarget).text() === " ") {
        this.innerHTML = players[counter % 2];
      } else {
        if($(e.currentTarget).text() === "o" || $(e.currentTarget).text() === 'x'){
          counter = counter++;
        };
      };
    });
  },
  newBoard: function() {
    if($('#row1 .span-1').length != 0) {
      for(r = 1; r < 4; r++) {
        for(i = 0; i < 3; i++) {
          $('#row'+r+ ' .span-'+i)[0].innerHTML = ' ';
        };
      };
    }
    if(boardState.state[0].length == 3){
    counter = Math.floor((Math.random()*2)+1);
    boardState = new RenderBoard();
    }
  }
}

function CheckGameResult() {
  boardState = new RenderBoard();
  this.computer_wins = 'xxx';
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
    var diagonal_right = boardState.state[0][0] + boardState.state[1][1] + boardState.state[2][2],
        diagonal_left = boardState.state[0][2] + boardState.state[1][1] + boardState.state[2][0];
    if(diagonal_right == this.computer_wins || diagonal_left == this.computer_wins) {
      answer = confirm("Computer wins. Play Again?");
      if(answer == true){
        new Game;
      };
    }
  }
}

//computer places piece
function AI(i, p) {
  boardState = new RenderBoard();
  if(boardState.state.length == 6) {
    boardState.state.splice(0, 3);
  }
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
      } else if(boardState.state[1][2] == 'o' && boardState.state[2][1] == 'o' && boardState.state[2][2] == " ") {
        return boardState.placePiece(2,2);
      } else {
        for(n = 0; n < 3; n++) {
          if(boardState.state[n] == "  " +p) {
            return boardState.placePiece(n, 1);
          } else if(boardState.state[n] == " " +p+ " ") {
            return boardState.placePiece(n, 0);
          } else if(boardState.state[n] == p+ "  ") {
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
        return boardState.placePiece(2, 2);
      } else if([boardState.state[0][0] == " " && boardState.state[1][1] == p && boardState.state[2][2]] == " ") {
        return boardState.placePiece(1, 1);
      } else if([boardState.state[0][0] == p && boardState.state[1][1] == " " && boardState.state[2][2]] == " ") {
        return boardState.placePiece(0, 0);
      };
      if([boardState.state[0][2] == " " && boardState.state[1][1] == " " && boardState.state[2][0]] == p){
        return boardState.placePiece(0, 2);
      } else if([boardState.state[0][2] == " " && boardState.state[1][1] == p && boardState.state[2][0]] == " ") {
        return boardState.placePiece(0, 2);
      } else if([boardState.state[0][2] == p && boardState.state[1][1] == " " && boardState.state[2][0]] == " ") {
        return boardState.placePiece(2, 0);
      };
      for(r=0; r < 3; r++) {
        for(i = 0; i < 3; i++) {
          if(boardState.state[r][i] == " ") {
            return boardState.placePiece(r,i);
          }
        }
      }
      i++;
    };
  }
}

function computerMoves(){
  var x = 'x',
      o = 'o',
      ai = new AI();
  if(boardState.state.length == 6) {
    boardState.state.splice(0, 3);
  } else if (boardState.state.length == 9) {
    boardState.state.splice(0, 6);
  };
  i = 0
  while(i < 4) {
    if(boardState.state.length != 0) {
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

function PageLoad() {
      boardState = new RenderBoard();
debugger
  if(counter == 3){
    if(firstTurn == 'computer') {
      if(boardState.state[1][1] == " ") {
        return boardState.placePiece(1, 1);
      } else {
        return boardState.placePiece(2, 2);
      };
    } else {
      if(boardState.state[1][1] == " ") {
        return boardState.placePiece(1, 1);
      } else {
        return boardState.placePiece(0, 0);
      };
    };
  } else if(counter == 5 || counter == 7 || counter == 9) {
    computerMoves();
  } else if (counter == 11) {
    return new CheckGameResult();
  };
}

function countClick() {
  counter++;
};
//global variables
var players = ['o','x'],
    counter = Math.floor((Math.random()*2)+1),
    game = new Game(),
    boardState = new RenderBoard(),
    firstTurn = '';

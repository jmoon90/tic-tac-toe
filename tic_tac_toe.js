var first_row = ['+','+','+'];
var second_row = ['+','+','+'];
var third_row = ['+','+','+'];

var computer_wins = 'xxx';
var player_wins = 'ooo';
var players = ['o','x'];
var state = []; // current state of board

var counter = Math.floor((Math.random()*2)+1);
//var counter = 2;

var placePiece = function(i,s) {
  counter++;
  var r = i+1;
  $('#row'+r+ ' .span-'+s).hide();
  $('#row'+r+ ' .span-'+s)[0].innerHTML = 'x';
  $('#row'+r+ ' .span-'+s).fadeIn(1000);
  return checkIfAnyoneCanWin();
}

function checkIfAnyoneCanWin() {
  checkRow();
  checkColumn();
  checkDiagonal();
  return checkTie();
}

var checkRowIfSomeoneCanWin = function(i, p) {
  if(state[i] == "+" +p +p) {
    return placePiece(i, 0);
  } else if(state[i] == p+ "+" +p) {
    return placePiece(i, 1);
  } else if(state[i] == p+ p+"+") {
    return placePiece(i, 2);
  };
}

var checkColumnIfSomeoneCanWin = function(i, p) {
  if([state[0][i] == p && state[1][i] == p && state[2][i]] == '+') {
    return placePiece(2,i)
  } else if([state[0][i] == p && state[1][i] =='+' && state[2][i]] == p) {
    return placePiece(1,i)
  } else if([state[0][i] == "+" && state[1][i] == p && state[2][i]] == p) {
    return placePiece(0,i)
  }
};

var checkDiagonalIfSomeoneCanWin = function(p) {
  if([state[0][0] == "+" && state[1][1] == p && state[2][2]] == p) {
    return placePiece(0, 0);
  } else if([state[0][0] == p && state[1][1] =='+' && state[2][2]] == p) {
    return placePiece(1, 1);
  } else if([state[0][0] == p && state[1][1] == p && state[2][2]] == '+') {
    return placePiece(2, 2);
  } else if([state[2][0] == "+" && state[1][1] == p && state[0][2]] == p) {
    return placePiece(2, 0);
  } else if([state[2][0] == p && state[1][1] =='+' && state[0][2]] == p) {
    return placePiece(1, 1);
  } else if([state[2][0] == p && state[1][1] == p && state[0][2]] == '+') {
    return placePiece(0, 2);
  };
};

var noPlayersHaveAdjacentPieces = function(p) {
  i = 0;
  while(i < 4) {
    for(n = 0; n < 3; n++) {
      if(state[n] == "++"+p) {
        return placePiece(n, 1);
      } else if(state[n] == "+"+p+"+") {
        return placePiece(n, 0);
      } else if(state[n] == p+"++") {
        return placePiece(n, 2);
      }
    }
    if([state[0][i] == "+" && state[1][i] =='+' && state[2][i]] == p) {
      return placePiece(1,i);
    } else if([state[0][i] == p && state[1][i] =='+' && state[2][i]] == '+') {
      return placePiece(1,i);
    } else if([state[0][i] == "+" && state[1][i] == p && state[2][i]] == '+') {
      return placePiece(0,i);
    } else if([state[0][i] == "+" && state[1][i+1] == p && state[2][i+2]] == '+') {
      return placePiece(0,i);
    } else if([state[2][i] == "+" && state[1][i+1] == p && state[1][i+2]] == '+') {
      return placePiece(2,i);
    };
    if([state[0][0] == "+" && state[1][1] == "+" && state[2][2]] == p){
      placePiece(2, 2);
    } else if([state[0][0] == "+" && state[1][1] == p && state[2][2]] == "+") {
      placePiece(1, 1);
    } else if([state[0][0] == p && state[1][1] == "+" && state[2][2]] == "+") {
      placePiece(0, 0);
    };
    i++;
  };
};

var computerMoves = function() {
  state.splice(0, 3);
  i = 0
  while(i < 4) {
    var x = 'x'
    checkRowIfSomeoneCanWin(i, x);
    checkColumnIfSomeoneCanWin(i, x);
    checkDiagonalIfSomeoneCanWin(x);
    i++;
  };

  i = 0
  while(i < 4) {
    var o = 'o';
    if(counter % 2 == 0) {
      return;
    } else {
      checkRowIfSomeoneCanWin(i, o);
      checkColumnIfSomeoneCanWin(i, o);
      checkDiagonalIfSomeoneCanWin(o);
    }
    i++;
  };

  if(counter % 2 == 0) {
    return;
  } else {
    noPlayersHaveAdjacentPieces('x');
    if(counter % 2 != 0) {
      noPlayersHaveAdjacentPieces('o');
    };
  }
}

function pageLoad() {
  if(counter == 3){
    if(firstMove == 'computer') {
      if($("#row3 .span-2").text() == '+') {
        return placePiece(2, 2);
      } else {
        return placePiece(1, 0);
      };
    } else {
      for(i = 0; i < 3; i++) {
        if(state[i] == "+o+") {
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
    if(firstMove == 'computer') {
      computerMoves();
      setInterval(function(){checkTie()},1200);
    } else {
      computerMoves();
    };
  };
};

function firstMove() {
  if(players[counter % 2] == 'x'){
    alert("Computer goes first");
    firstMove = 'computer';
    placePiece(0,0);
  } else {
    firstMove = 'player'
    alert("Player goes first");
  };
};

function countClick() {
  counter++;
};

function checkTie() {
  i = 1
  var space_left = 0
  while(i < 4) {
    for(n = 0; n < 3; n++) {
      if($("#row" + i).text()[n] == "+") {
        space_left++;
      }
    };
    i++;
  };
  if(space_left == 0) {
    if(confirm("Tie game! Nobody wins. Play again?")) {
      return location.reload();
    };
  };
}

function checkRow() {
  if($("#row1").text() == computer_wins || $("#row2").text() == computer_wins || $("#row3").text() == computer_wins) {
    alert("Computer wins");
    return location.reload();
  } else {
    return
  };
}

function checkColumn() {
  i = 0
  while(i < 3) {
    var column = $("#row1").text()[i] + $("#row2").text()[i] + $("#row3").text()[i]
    if(column == computer_wins) {
      alert("Computer wins");
      return location.reload();
    };
    i++
  }
}

function checkDiagonal() {
  var diagonal_right = $("#row1").text()[0] + $("#row2").text()[1] + $("#row3").text()[2]
  var diagonal_left = $("#row1").text()[2] + $("#row2").text()[1] + $("#row3").text()[0]
  if(diagonal_right == computer_wins || diagonal_left == computer_wins) {
    alert("Computer wins");
    window.alert = setInterval(function() {}, 3000);
    return location.reload();
  }
}

function push_to_state() {
  state.push($("#row1").text());
  state.push($("#row2").text());
  return state.push($("#row3").text());
}

function initialBoard() {
  var row_1 = document.getElementById('row1');
  var row_2 = document.getElementById('row2');
  var row_3 = document.getElementById('row3');

  var rows = [row_1, row_2, row_3];
  var board = [first_row, second_row, third_row];

  for(var row in rows) {
    for(i = 0; i < 3; i++) {
      var span = $('<span>').addClass('square span-'+i).html(board[row][i]);
      $( '#row'+(Number(row)+1)).append(span);
    };
  }
}

$(function(){
  initialBoard();
  firstMove();
  $(".row span").click(function(e){
    if($(e.currentTarget).text() === "+") {
      $(e.currentTarget)[0].innerHTML = players[counter % 2];
      push_to_state();
    } else {
      counter = counter - 1;
    };
   });
});

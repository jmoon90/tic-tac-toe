var first_row = ['+','+','+'];
var second_row = ['+','+','+'];
var third_row = ['+','+','+'];

var player_wins = 'ooo';
var computer_wins = 'xxx';
var state = [];

var players = ['o','x'];

//var counter = Math.floor((Math.random()*2)+1);
var counter = 1;

var checkRowIfSomeoneWins = function(i, p) {
  if(state[i] == "+" +p +p) {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span0')[0].innerHTML = 'x';
    checkRow();
  } else if(state[i] == p+ "+" +p) {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span1')[0].innerHTML = 'x';
    checkRow();
  } else if(state[i] == p+ p+"+") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span2')[0].innerHTML = 'x';
    checkRow();
  };
}

var checkColumnIfSomeoneWins = function(i, p) {
  if([state[0][i] == p && state[1][i] == p && state[2][i]] == '+') {
    counter++;
    $('#row3'+ ' span'+i)[0].innerHTML = 'x';
    return checkColumn();
  } else if([state[0][i] == p && state[1][i] =='+' && state[2][i]] == p) {
    counter++;
    $('#row2'+ ' span'+i)[0].innerHTML = 'x';
    return checkColumn();
  } else if([state[0][i] == "+" && state[1][i] == p && state[2][i]] == p) {
    counter++;
    $('#row1'+ ' span'+i)[0].innerHTML = 'x';
    return checkColumn();
  }
};

var checkDiagonalIfSomeoneWins = function(p) {
  if([state[0][0] == "+" && state[1][1] == p && state[2][2]] == p) {
    counter++
    $('#row1' + ' span0')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[0][0] == p && state[1][1] =='+' && state[2][2]] == p) {
    counter++
    $('#row2'+ ' span1')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[0][0] == p && state[1][1] == p && state[2][2]] == '+') {
    counter++
    $('#row3'+ ' span2')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[2][0] == "+" && state[1][1] == p && state[0][2]] == p) {
    counter++;
    $('#row3' + ' span0')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[2][0] == p && state[1][1] =='+' && state[0][2]] == p) {
    counter++;
    $('#row2'+ ' span1')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[2][0] == p && state[1][1] == p && state[0][2]] == '+') {
    counter++;
    $('#row1'+ ' span2')[0].innerHTML = 'x';
    return checkDiagonal();
  };
};

var noPlayersHaveAdjacentPieces = function() {
  var adjacent_row = function(n,spanNumber) {
    counter++;
    r = n + 1;
    $('#row'+r+ ' span'+spanNumber).hide();
    $('#row'+r+ ' span'+spanNumber)[0].innerHTML = 'x';
    $('#row'+r+ ' span'+spanNumber).fadeIn(1000);
    return checkTie();
  }
  var adjacent_columns = function(i, r) {
    counter++
    $('#row'+r+ ' span'+i).hide();
    $('#row'+r+ ' span'+i)[0].innerHTML = 'x';
    $('#row'+r+ ' span'+i).fadeIn(1000);
    return checkTie();
  }
  i = 0;
  while(i < 4) {
    for(n = 0; n < 3; n++) {
      if(state[n] == "++x") {
        return adjacent_row(n,2);
      } else if(state[n] == "+x+") {
        return adjacent_row(n,0);
      } else if(state[n] == "x++") {
        return adjacent_row(n,2);
      }
    }

    if([state[0][i] == "+" && state[1][i] =='+' && state[2][i]] == 'x') {
      return adjacent_columns(i,2);
    } else if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == '+') {
      return adjacent_columns(i,2);
    } else if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == '+') {
      return adjacent_columns(i,1);
    } else if([state[0][i] == "+" && state[1][i+1] =='x' && state[2][i+2]] == '+') {
      counter++
      r = i + 1
      $('#row1'+ ' span'+i).hide();
      $('#row1'+ ' span'+i)[0].innerHTML = 'x';
      $('#row1'+ ' span'+i).fadeIn(1000);
      return checkTie();
    } else if([state[2][i] == "+" && state[1][i+1] =='x' && state[1][i+2]] == '+') {
      counter++
      r = i + 1
      $('#row3'+ ' span'+i).hide();
      $('#row3'+ ' span'+i)[0].innerHTML = 'x';
      $('#row3'+ ' span'+i).fadeIn(1000);
      return checkTie();
    };
    i++;
  };
};

var computerMoves = function() {
  state.splice(0, 3);
  i = 0
  while(i < 4) {
    var x = 'x'
    checkRowIfSomeoneWins(i, x);
    checkColumnIfSomeoneWins(i, x);
    checkDiagonalIfSomeoneWins(x);
    i++;
  };

  i = 0
  while(i < 4) {
    var o = 'o';
    if(counter % 2 == 0) {
      return;
    } else {
      checkRowIfSomeoneWins(i, o);
      checkColumnIfSomeoneWins(i, o);
      checkDiagonalIfSomeoneWins(o);
    }
    i++;
  };

  if(counter % 2 == 0) {
    return;
  } else {
    noPlayersHaveAdjacentPieces();
  }
}

function pageLoad() {
  var cornerOrMidPlacement = function(r, s) {
    counter++;
    $('#row'+r+ ' span'+s).hide();
    $('#row'+r+ ' span'+s)[0].innerHTML = 'x';
    return $('#row'+r+ ' span'+s).fadeIn(1000);
  }
  if(counter == 3){
    if(firstMove == 'computer') {
      if($("#row3 span2").text() == '+') {
        return cornerOrMidPlacement(3, 2);
      } else {
        return cornerOrMidPlacement(3, 0);
      };
    } else {
      if($("#row2 span1").text() == '+') {
        return cornerOrMidPlacement(2, 1);
      } else {
        return cornerOrMidPlacement(1, 0);
      }
    };
  } else if(counter == 5) {
    if(firstMove == 'computer'){
      computerMoves();
     } else {
      computerMoves();
     };

  } else if(counter == 7) {
    if(firstMove == 'computer') {
      computerMoves();
    } else {
      computerMoves();
    };

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
    firstMove = 'computer'
    $("#row1 span0").hide()
    $("#row1 span0")[0].innerHTML = "x";
    $("#row1 span0").fadeIn(1000)
    counter++;
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

onload = function()
{
  var push_to_state = function() {
    state.push($("#row1").text());
    state.push($("#row2").text());
    return state.push($("#row3").text());
  }

  var row_1 = document.getElementById('row1');
  var row_2 = document.getElementById('row2');
  var row_3 = document.getElementById('row3');

  for (var i in first_row) {
    var span = document.createElement('span'+i);
    span.innerHTML = first_row[i];
    row_1.appendChild(span);
  }

  for (var i in second_row) {
    var span = document.createElement('span'+i);
    span.innerHTML = second_row[i];
    row_2.appendChild(span);
  }

  for (var i in third_row) {
    var span = document.createElement('span'+i);
    span.innerHTML = third_row[i];
    row_3.appendChild(span);
  }

//first row
  $(document).ready(function(){
    $("#row1 span0").click(function(){
      if ($("#row1 span0")[0].innerHTML == "+") {
        $("#row1 span0")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row1 span1").click(function(){
      if ($("#row1 span1")[0].innerHTML == "+") {
        $("#row1 span1")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row1 span2").click(function(){
      if ($("#row1 span2")[0].innerHTML == "+") {
        $("#row1 span2")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
      counter = counter - 1;
      };
    });
  });

//second row
  $(document).ready(function(){
    $("#row2 span0").click(function(){
      if ($("#row2 span0")[0].innerHTML == "+") {
        $("#row2 span0")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row2 span1").click(function(){
      if ($("#row2 span1")[0].innerHTML == "+") {
        $("#row2 span1")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row2 span2").click(function(){
      if ($("#row2 span2")[0].innerHTML == "+") {
        $("#row2 span2")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
      counter = counter - 1;
      };
    });
  });

//third row
  $(document).ready(function(){
    $("#row3 span0").click(function(){
      if ($("#row3 span0")[0].innerHTML == "+") {
        $("#row3 span0")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row3 span1").click(function(){
      if ($("#row3 span1")[0].innerHTML == "+") {
        $("#row3 span1")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row3 span2").click(function(){
      if ($("#row3 span2")[0].innerHTML == "+") {
        $("#row3 span2")[0].innerHTML = players[counter % 2];
        push_to_state();
      } else {
        counter = counter - 1;
      };
    });
  });
}

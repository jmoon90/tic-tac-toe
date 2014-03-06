var first_row = ['+','+','+'];
var second_row = ['+','+','+'];
var third_row = ['+','+','+'];

var player_wins = 'ooo';
var computer_wins = 'xxx';
var state = [];

var players = ['o','x'];

var counter = Math.floor((Math.random()*2)+1);
var counter = 2;

var checkRowIfPlayerWins = function(i) {
  if(state[i] == "+oo") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span0').hide();
    $('#row' +r+ ' span0')[0].innerHTML = 'x';
    $('#row' +r+ ' span0').fadeIn(1000);
    return checkRow();
  }
  if(state[i] == "o+o") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span1').hide();
    $('#row' +r+ ' span1')[0].innerHTML = 'x';
    $('#row' +r+ ' span1').fadeIn(1000);
    return checkRow();
  }
  if(state[i] == "oo+") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span2').hide();
    $('#row' +r+ ' span2')[0].innerHTML = 'x';
    $('#row' +r+ ' span2').fadeIn(1000);
    return checkRow();
  }
}

var checkRowIfComputerWins = function(i) {
  if(state[i] == "+xx") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span0')[0].innerHTML = 'x';
    return checkRow();
  } else if(state[i] == "x+x") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span1')[0].innerHTML = 'x';
    return checkRow();
  } else if(state[i] == "xx+") {
    counter++;
    var r = i+1;
    $('#row' +r+ ' span2')[0].innerHTML = 'x';
    return checkRow();
  };
}

var checkColumnIfComputerWins = function(i) {
  if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
    counter++
    $('#row3'+ ' span'+i)[0].innerHTML = 'x';
    return checkColumn();
  } else if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
    counter++
    $('#row2'+ ' span'+i)[0].innerHTML = 'x';
    return checkColumn();
  } else if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
    counter++
    $('#row1'+ ' span'+i)[0].innerHTML = 'x';
    return checkColumn();
  }
};

var checkDiagonalIfComputerWins = function() {
  if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
    counter++
    $('#row1' + ' span0')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
    counter++
    $('#row2'+ ' span1')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
    counter++
    $('#row3'+ ' span2')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
    counter++
    $('#row3' + ' span0')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
    counter++
    $('#row2'+ ' span1')[0].innerHTML = 'x';
    return checkDiagonal();
  } else if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
    counter++
    $('#row1'+ ' span2')[0].innerHTML = 'x';
    return checkDiagonal();
  };
};

var noPlayersHaveAdjacentPieces = function() {
  i = 0
  while(i < 4) {
    if(state[i] == "++x") {
      counter++
      r = i + 1;
      $('#row' +r+ ' span2').hide();
      $('#row' +r+ ' span2')[0].innerHTML = 'x';
      $('#row' +r+ ' span2').fadeIn(1000);
      return checkTie();
    } else if(state[i] == "+x+") {
      counter++
      r = i + 1;
      $('#row' +r+ ' span0').hide();
      $('#row' +r+ ' span0')[0].innerHTML = 'x';
      $('#row' +r+ ' span0').fadeIn(1000);
      return checkTie();
    } else if(state[i] == "x++") {
      counter++
      r = i + 1;
      $('#row' +r+ ' span2').hide();
      $('#row' +r+ ' span2')[0].innerHTML = 'x';
      $('#row' +r+ ' span2').fadeIn(1000);
      return checkTie();
    } else if([state[0][i] == "+" && state[1][i] =='+' && state[2][i]] == 'x') {
      counter++
      $('#row2'+ ' span'+i).hide();
      $('#row2'+ ' span'+i)[0].innerHTML = 'x';
      $('#row2'+ ' span'+i).fadeIn(1000);
      return checkTie();
    } else if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == '+') {
      counter++
      $('#row2'+ ' span'+i).hide();
      $('#row2'+ ' span'+i)[0].innerHTML = 'x';
      $('#row2'+ ' span'+i).fadeIn(1000);
      return checkTie();
    } else if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == '+') {
      counter++
      $('#row1'+ ' span'+i).hide();
      $('#row1'+ ' span'+i)[0].innerHTML = 'x';
      $('#row1'+ ' span'+i).fadeIn(1000);
      return checkTie();
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
    } else {
      i = 0
      while(i < 3) {
        for(n = 0; n < state.length; n++) {
          if(state[i][n] == '+'){
            var r = i + 1;
            counter++;
            $('#row'+r+ ' span'+n).hide();
            $('#row'+r+ ' span'+n)[0].innerHTML = 'x';
            return  $('#row'+r+ ' span'+n).fadeIn(1000);
          };
        };
        i++;
      };
    };
    i++;
  };
};

var computerMovesFirst = function() {
  i = 0
  state.splice(0, 3);
  while(i < 4) {
    checkRowIfComputerWins(i);
    checkColumnIfComputerWins(i);
    checkDiagonalIfComputerWins();
    i++;
  };

  i = 0
  while(i < 4) {
    //checking rows to prevent player form winning
    //checkRowIfPlayerWins(i);
    if(state[i] == "+oo") {
      counter++;
      var r = i+1;
      $('#row' +r+ ' span0').hide();
      $('#row' +r+ ' span0')[0].innerHTML = 'x';
      $('#row' +r+ ' span0').fadeIn(1000);
      return checkRow();
    }
    if(state[i] == "o+o") {
      counter++;
      var r = i+1;
      $('#row' +r+ ' span1').hide();
      $('#row' +r+ ' span1')[0].innerHTML = 'x';
      $('#row' +r+ ' span1').fadeIn(1000);
      return checkRow();
    }
    if(state[i] == "oo+") {
      counter++;
      var r = i+1;
      $('#row' +r+ ' span2').hide();
      $('#row' +r+ ' span2')[0].innerHTML = 'x';
      $('#row' +r+ ' span2').fadeIn(1000);
    return checkRow();
  }

    //checking columns to prevent player from winning
    if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
      counter++
      $('#row3'+ ' span'+i).hide();
      $('#row3'+ ' span'+i)[0].innerHTML = 'x';
      return $('#row3'+ ' span'+i).fadeIn(1000);
    }
    if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
      counter++
      $('#row2'+ ' span'+i).hide();
      $('#row2'+ ' span'+i)[0].innerHTML = 'x';
      return $('#row2'+ ' span'+i).fadeIn(1000);
    }
    if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
      counter++
      $('#row1'+ ' span'+i).hide();
      $('#row1'+ ' span'+i)[0].innerHTML = 'x';
      return $('#row1'+ ' span'+i).fadeIn(1000);
    }
    //diagonal to prevent player from winning
    if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
      counter++
      $('#row3' + ' span0').hide();
      $('#row3' + ' span0')[0].innerHTML = 'x';
      return $('#row3' + ' span0').fadeIn(1000);
    }
    if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
      counter++
      $('#row2'+ ' span1').hide();
      $('#row2'+ ' span1')[0].innerHTML = 'x';
      return $('#row2'+ ' span1').fadeIn(1000);
    }
    if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
      counter++
      $('#row1'+ ' span2').hide();
      $('#row1'+ ' span2')[0].innerHTML = 'x';
      return $('#row1'+ ' span2').fadeIn(1000);
    }
    if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
      counter++
      $('#row1' + ' span0').hide();
      $('#row1' + ' span0')[0].innerHTML = 'x';
      return $('#row1' + ' span0').fadeIn(1000);
    }
    if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
      counter++
      $('#row2'+ ' span1').hide();
      $('#row2'+ ' span1')[0].innerHTML = 'x';
      return $('#row2'+ ' span1').fadeIn(1000);
    }
    if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
      counter++
      $('#row3'+ ' span2').hide();
      $('#row3'+ ' span2')[0].innerHTML = 'x';
      return $('#row3'+ ' span2').fadeIn(1000);
    }
    i++;
  };
  noPlayersHaveAdjacentPieces();
}

var computerMovesSecond = function() {
  state.splice(0, 3);
  i = 0
  while(i < 4) {
    checkRowIfComputerWins(i);
    checkColumnIfComputerWins(i);
    checkDiagonalIfComputerWins();
    i++;
  };

  i = 0
  while(i < 4) {
    //checking rows to prevent player form winning

    //Problem is when I use function checkRowIfPlayerWins it returns to
    //the while statement and continues down the list instead of
    //breaking out of the while statement all together.
    if(state[i] == "+oo") {
      counter++;
      var r = i+1;
      $('#row' +r+ ' span0').hide();
      $('#row' +r+ ' span0')[0].innerHTML = 'x';
      $('#row' +r+ ' span0').fadeIn(1000);
      return checkRow();
    }
    if(state[i] == "o+o") {
      counter++;
      var r = i+1;
      $('#row' +r+ ' span1').hide();
      $('#row' +r+ ' span1')[0].innerHTML = 'x';
      $('#row' +r+ ' span1').fadeIn(1000);
      return checkRow();
    }
    if(state[i] == "oo+") {
      counter++;
      var r = i+1;
      $('#row' +r+ ' span2').hide();
      $('#row' +r+ ' span2')[0].innerHTML = 'x';
      $('#row' +r+ ' span2').fadeIn(1000);
      return checkRow();
    }
    //checking columns to prevent player from winning
    if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
      counter++
      $('#row3'+ ' span'+i).hide();
      $('#row3'+ ' span'+i)[0].innerHTML = 'x';
      return $('#row3'+ ' span'+i).fadeIn(1000);
    }
    if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
      counter++
      $('#row2'+ ' span'+i).hide();
      $('#row2'+ ' span'+i)[0].innerHTML = 'x';
      return $('#row2'+ ' span'+i).fadeIn(1000);
    }
    if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
      counter++
      $('#row1'+ ' span'+i).hide();
      $('#row1'+ ' span'+i)[0].innerHTML = 'x';
      return $('#row1'+ ' span'+i).fadeIn(1000);
    }
    //diagonal to prevent player from winning
    if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
      counter++
      $('#row3' + ' span0').hide();
      $('#row3' + ' span0')[0].innerHTML = 'x';
      return $('#row3' + ' span0').fadeIn(1000);
    }
    if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
      counter++
      $('#row2'+ ' span1').hide();
      $('#row2'+ ' span1')[0].innerHTML = 'x';
      return $('#row2'+ ' span1').fadeIn(1000);
    }
    if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
      counter++
      $('#row1'+ ' span2').hide();
      $('#row1'+ ' span2')[0].innerHTML = 'x';
      return $('#row1'+ ' span2').fadeIn(1000);
    }
    if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
      counter++
      $('#row1' + ' span0').hide();
      $('#row1' + ' span0')[0].innerHTML = 'x';
      return $('#row1' + ' span0').fadeIn(1000);
    }
    if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
      counter++
      $('#row2'+ ' span1').hide();
      $('#row2'+ ' span1')[0].innerHTML = 'x';
      return $('#row2'+ ' span1').fadeIn(1000);
    }
    if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
      counter++
      $('#row3'+ ' span2').hide();
      $('#row3'+ ' span2')[0].innerHTML = 'x';
      return $('#row3'+ ' span2').fadeIn(1000);
    }
    i++;
  };
  noPlayersHaveAdjacentPieces();
}

//Turn by turn game play
function pageLoad() {
  if(counter == 3){
    //computer 2nd move after going first
    if(firstMove == 'computer') {
      if($("#row3 span2").text() == '+') {
        counter++;
        $('#row3'+ ' span2').hide();
        $("#row3 span2")[0].innerHTML = 'x';
        return $('#row3'+ ' span2').fadeIn(1000);
      } else {
        counter++;
        $('#row3'+ ' span0').hide();
        $("#row3 span0")[0].innerHTML = "x";
        return $('#row3'+ ' span0').fadeIn(1000);
      };
    } else {
      //computer 1st move after going second
      if($("#row2 span1").text() == '+') {
        counter++;
        $("#row2 span1").hide();
        $("#row2 span1")[0].innerHTML = "x";
        return $("#row2 span1").fadeIn(1000);
      } else {
        counter++;
        $("#row1 span0").hide();
        $("#row1 span0")[0].innerHTML = "x";
        return $("#row1 span0").fadeIn(1000);
      };
    };
  } else if(counter == 5) {
      //3rd move by computer after going first
    if(firstMove == 'computer'){
      computerMovesFirst();
     } else {
      //computers 2nd move after going second.
      computerMovesSecond();
     };

  } else if(counter == 7) {
    if(firstMove == 'computer') {
      computerMovesFirst();
    } else {
      //computers 3rd move after going second
      computerMovesSecond();
    };

  } else if(counter == 9) {
    //computers last move after going 1st
    if(firstMove == 'computer') {
      computerMovesFirst();
      setInterval(function(){checkTie()},1200);
    } else {
      computerMovesSecond();
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

//check_board
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

//check_row
function checkRow() {
  if($("#row1").text() == player_wins ||
     $("#row2").text() == player_wins ||
     $("#row3").text() == player_wins) {
    alert("Player 1 wins");
    return location.reload();
  } else if($("#row1").text() == computer_wins ||
            $("#row2").text() == computer_wins ||
            $("#row3").text() == computer_wins) {
    alert("Computer wins");
    return location.reload();
  };
}

//check_column
function checkColumn() {
  i = 0
  while(i < 3) {
    var column = $("#row1").text()[i] + $("#row2").text()[i] + $("#row3").text()[i]
    if(column == player_wins) {
      alert("Player 1 wins");
      return location.reload();
    } else if(column == computer_wins) {
      alert("Computer wins");
      return location.reload();
    };
    i++
  }
}

//check_diagonally
function checkDiagonal() {
  var diagonal_right = $("#row1").text()[0] + $("#row2").text()[1] + $("#row3").text()[2]
  var diagonal_left = $("#row1").text()[2] + $("#row2").text()[1] + $("#row3").text()[0]
  if(diagonal_right == player_wins || diagonal_left == player_wins) {
    alert("Player 1 wins");
    return location.reload();
  } else if(diagonal_right == computer_wins || diagonal_left == computer_wins) {
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

var first_row = ['+','+','+'];
var second_row = ['+','+','+'];
var third_row = ['+','+','+'];

var player1_wins = 'ooo';
var player2_wins = 'xxx';

var players = ['o','x'];
var counter = 0;

function countClick() {
  counter++;
}

//check_board
function checkBoard() {
  i = 1
  var space_left = 0
  while(i < 4) {
    for(n = 0; n < 3; n++) {
      if($("#row" + i).text()[n] == "+") {
        space_left++;
      }
    }
    i++;
  }
  if(space_left == 0) {
    if(confirm("Tie game! Nobody wins. Play again?")) {
      return location.reload();
    };
  }
}

//check_row
function checkRow() {
  if($("#row1").text() == player1_wins || $("#row2").text() == player1_wins || $("#row3").text() == player1_wins) {
    alert("Player 1 wins");
    return location.reload();
  } else if($("#row1").text() == player2_wins ||
            $("#row2").text() == player2_wins ||
            $("#row3").text() == player2_wins) {
    alert("Player 2 wins");
    return location.reload();
  };
}

//check_column
function checkColumn() {
  i = 0
  while(i < 3) {
    var column = $("#row1").text()[i] + $("#row2").text()[i] + $("#row3").text()[i]
    if(column == player1_wins) {
      alert("Player 1 wins");
      return location.reload();
    } else if(column == player2_wins) {
      alert("Player 2 wins");
      return location.reload();
    };
    i++
  }
}

//check_diagonally
function checkDiagonal() {
  var diagonal_right = $("#row1").text()[0] + $("#row2").text()[1] + $("#row3").text()[2]
  var diagonal_left = $("#row1").text()[2] + $("#row2").text()[1] + $("#row3").text()[0]
  if(diagonal_right == player1_wins || diagonal_left == player1_wins) {
    alert("Player 1 wins");
    return location.reload();
  } else if(diagonal_right == player2_wins || diagonal_left == player2_wins) {
    alert("Player 2 wins");
    return location.reload();
  }
}

onload = function()
{
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
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row1 span1").click(function(){
      if ($("#row1 span1")[0].innerHTML == "+") {
        $("#row1 span1")[0].innerHTML = players[counter % 2];
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row1 span2").click(function(){
      if ($("#row1 span2")[0].innerHTML == "+") {
        $("#row1 span2")[0].innerHTML = players[counter % 2];
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
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row2 span1").click(function(){
      if ($("#row2 span1")[0].innerHTML == "+") {
        $("#row2 span1")[0].innerHTML = players[counter % 2];
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row2 span2").click(function(){
      if ($("#row2 span2")[0].innerHTML == "+") {
        $("#row2 span2")[0].innerHTML = players[counter % 2];
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
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row3 span1").click(function(){
      if ($("#row3 span1")[0].innerHTML == "+") {
        $("#row3 span1")[0].innerHTML = players[counter % 2];
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row3 span2").click(function(){
      if ($("#row3 span2")[0].innerHTML == "+") {
        $("#row3 span2")[0].innerHTML = players[counter % 2];
      } else {
        counter = counter - 1;
      };
    });
  });
}


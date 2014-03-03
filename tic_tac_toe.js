var first_row = ['+','+','+'];
var second_row = ['+','+','+'];
var third_row = ['+','+','+'];

var player1_wins = 'ooo';
var player2_wins = 'xxx';
var state = [];

var players = ['o','x'];

var first_move = 'who'

//var counter = Math.floor((Math.random()*2)+1);
 var counter = 1


function pageLoad() {
  if(counter == 3){
    //computer 2nd move
    if(first_move == 'computer') {
      if($("#row3 span2").text() == '+') {
        counter++;
        return $("#row3 span2")[0].innerHTML = 'x';
      } else {
        counter++;
        return $("#row3 span0")[0].innerHTML = "x";
      };
    } else {
    //computer 1st move
      if($("#row2 span1").text() == '+') {
        counter++;
        return $("#row2 span1")[0].innerHTML = "x";
      } else {
        counter++;
        return $("#row1 span0")[0].innerHTML = "x";
      };
    };
  } else if(counter == 5) {

//3rd move by computer. Check if there are two player pieces that are
//placed together. Block the winning slot. If not place piece in the
//corner.
    if(first_move == 'computer'){
      i = 0
      state.splice(0, 3);
      while(i < 4) {
        for(n = 0; n < 3; n++) {

         //checking rows if computer can win
          if(state[i] == "+xx") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "x+x") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "xx+") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          };

        //checking columns if computer can win
          if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //checking top left diagonal if computer can win
          if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };

      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
          //top right diagonal to prevent player from winning
          if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }

          //checking rows to prevent player form winning
          if(state[i] == "+oo") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "o+o") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "oo+") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns to prevent player from winning
          if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //top left diagonal to prevent player from winning
          if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };
    } else {

//computers 2nd move. Check for player pieces that are together. Then block. If not connect
//own pieces for a chance to win.
      state.splice(0, 3);
      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
         //checking rows if computer can win
          if(state[i] == "+xx") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "x+x") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "xx+") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          };
        //checking columns if computer can win
          if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }
          //checking top left diagonal if computer can win
          if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
        checkDiagonal();
        checkColumn();
        checkRow();
        checkBoard();
      };

      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
          //top right diagonal to prevent player from winning
          if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }

          //checking rows to prevent player form winning
          if(state[i] == "+oo") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "o+o") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "oo+") {
            counter++;
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns to prevent player from winning
          if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //top left diagonal to prevent player from winning
          if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };
//duplicate from counter == 7
      i = 0
      while(i < 4) {
        if(state[i] == "++x") {
          counter++
          r = i + 1;
          return $('#row' +r+ ' span2')[0].innerHTML = 'x';
        } else if(state[i] == "+x+") {
          counter++
          r = i + 1;
          return $('#row' +r+ ' span0')[0].innerHTML = 'x';
        } else if(state[i] == "x++") {
          counter++
          r = i + 1;
          return $('#row' +r+ ' span2')[0].innerHTML = 'x';
        } else if([state[0][i] == "+" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
        } else if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == '+') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
        } else if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
        };
        i++;
      };
    };

  } else if(counter == 7) {
    if(first_move == 'computer') {
      i = 0
      state.splice(0, 3);
      while(i < 4) {
        for(n = 0; n < 3; n++) {
         //checking rows if computer can win
          if(state[i] == "+xx") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "x+x") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "xx+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          };
        //checking columns if computer can win
          if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }
          //checking top left diagonal if computer can win
          if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };

      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
          //top right diagonal to prevent player from winning
          if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }

          //checking rows to prevent player form winning
          if(state[i] == "+oo") {
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "o+o") {
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "oo+") {
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns to prevent player from winning
          if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //top left diagonal to prevent player from winning
          if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };
    } else {
      //computers 3rd move after going second
      i = 0
      state.splice(0, 3);
      while(i < 4) {
        for(n = 0; n < 3; n++) {
         //checking rows if computer can win
          if(state[i] == "+xx") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "x+x") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "xx+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          };
        //checking columns if computer can win
          if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }
          //checking top left diagonal if computer can win
          if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };

      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
          //top right diagonal to prevent player from winning
          if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }

          //checking rows to prevent player form winning
          if(state[i] == "+oo") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "o+o") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "oo+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns to prevent player from winning
          if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //top left diagonal to prevent player from winning
          if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };

      //When there are no winning hands. Computer should place piece
      //next to his own piece
      i = 0
      while(i < 4) {
        if(state[i] == "++x") {
          counter++
          r = i + 1;
          return $('#row' +r+ ' span2')[0].innerHTML = 'x';
        } else if(state[i] == "+x+") {
          counter++
          r = i + 1;
          return $('#row' +r+ ' span0')[0].innerHTML = 'x';
        } else if(state[i] == "x++") {
          counter++
          r = i + 1;
          return $('#row' +r+ ' span2')[0].innerHTML = 'x';
        } else if([state[0][i] == "+" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
        } else if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == '+') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
        } else if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
        };
        i++;
      };
    };
  } else if(counter == 9) {
      //computers last move after going 1st
    if(first_move == 'computer') {
      i = 0
      state.splice(0, 3);
      while(i < 4) {
        for(n = 0; n < 3; n++) {
         //checking rows if computer can win
          if(state[i] == "+xx") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "x+x") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "xx+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns if computer can win
          if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //checking top left diagonal if computer can win
          if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++
      };

      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
          //checking rows to prevent player form winning
          if(state[i] == "+oo") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "o+o") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "oo+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns to prevent player from winning
          if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //top left diagonal to prevent player from winning
          if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //top right diagonal to prevent player from winning
          if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };
    } else {
    i = 0
      state.splice(0, 3);
      while(i < 4) {
        for(n = 0; n < 3; n++) {
         //checking rows if computer can win
          if(state[i] == "+xx") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "x+x") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "xx+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns if computer can win
          if([state[0][i] == "x" && state[1][i] =='x' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "x" && state[1][i] =='+' && state[2][i]] == 'x') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='x' && state[2][i]] == 'x') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //checking top left diagonal if computer can win
          if([state[0][0] == "+" && state[1][1] =='x' && state[2][2]] == 'x') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='+' && state[2][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "x" && state[1][1] =='x' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }

          //checking top right diagonal if computer can win
          if([state[2][0] == "+" && state[1][1] =='x' && state[0][2]] == 'x') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='+' && state[0][2]] == 'x') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "x" && state[1][1] =='x' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++
      };

      i = 0
      while(i < 4) {
        for(n = 0; n < 3; n++) {
          //checking rows to prevent player form winning
          if(state[i] == "+oo") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span0')[0].innerHTML = 'x';
          }
          if(state[i] == "o+o") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span1')[0].innerHTML = 'x';
          }
          if(state[i] == "oo+") {
            counter++
            var r = i+1
            return $('#row' +r+ ' span2')[0].innerHTML = 'x';
          }

          //checking columns to prevent player from winning
          if([state[0][i] == "o" && state[1][i] =='o' && state[2][i]] == '+') {
            counter++
            return $('#row3'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "o" && state[1][i] =='+' && state[2][i]] == 'o') {
            counter++
            return $('#row2'+ ' span'+i)[0].innerHTML = 'x';
          }
          if([state[0][i] == "+" && state[1][i] =='o' && state[2][i]] == 'o') {
            counter++
            return $('#row1'+ ' span'+i)[0].innerHTML = 'x';
          }

          //top left diagonal to prevent player from winning
          if([state[0][0] == "+" && state[1][1] =='o' && state[2][2]] == 'o') {
            counter++
            return $('#row1' + ' span0')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='+' && state[2][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[0][0] == "o" && state[1][1] =='o' && state[2][2]] == '+') {
            counter++
            return $('#row3'+ ' span2')[0].innerHTML = 'x';
          }

          //top right diagonal to prevent player from winning
          if([state[2][0] == "+" && state[1][1] =='o' && state[0][2]] == 'o') {
            counter++
            return $('#row3' + ' span0')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='+' && state[0][2]] == 'o') {
            counter++
            return $('#row2'+ ' span1')[0].innerHTML = 'x';
          }
          if([state[2][0] == "o" && state[1][1] =='o' && state[0][2]] == '+') {
            counter++
            return $('#row1'+ ' span2')[0].innerHTML = 'x';
          }
        };
        i++;
      };;
    };
  };
};

function firstMove() {
  if(players[counter % 2] == 'x'){
    alert("Computer goes first");
    first_move = 'computer'
    $("#row1 span0")[0].innerHTML = "x";
    counter++;
  } else {
    first_move = 'player'
    alert("Player goes first");
  };
}

function countClick() {
  counter++;
};

//check_board
function checkBoard() {
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
  if($("#row1").text() == player1_wins || $("#row2").text() == player1_wins || $("#row3").text() == player1_wins) {
    alert("Player 1 wins");
    return location.reload();
  } else if($("#row1").text() == player2_wins ||
            $("#row2").text() == player2_wins ||
            $("#row3").text() == player2_wins) {
    alert("Computer wins");
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
  if(diagonal_right == player1_wins || diagonal_left == player1_wins) {
    alert("Player 1 wins");
    return location.reload();
  } else if(diagonal_right == player2_wins || diagonal_left == player2_wins) {
    alert("Computer wins");
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
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row1 span1").click(function(){
      if ($("#row1 span1")[0].innerHTML == "+") {
        $("#row1 span1")[0].innerHTML = players[counter % 2];
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row1 span2").click(function(){
      if ($("#row1 span2")[0].innerHTML == "+") {
        $("#row1 span2")[0].innerHTML = players[counter % 2];
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
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
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row2 span1").click(function(){
      if ($("#row2 span1")[0].innerHTML == "+") {
        $("#row2 span1")[0].innerHTML = players[counter % 2];
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
      counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row2 span2").click(function(){
      if ($("#row2 span2")[0].innerHTML == "+") {
        $("#row2 span2")[0].innerHTML = players[counter % 2];
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
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
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row3 span1").click(function(){
      if ($("#row3 span1")[0].innerHTML == "+") {
        $("#row3 span1")[0].innerHTML = players[counter % 2];
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
        counter = counter - 1;
      };
    });
  });
  $(document).ready(function(){
    $("#row3 span2").click(function(){
      if ($("#row3 span2")[0].innerHTML == "+") {
        $("#row3 span2")[0].innerHTML = players[counter % 2];
        state.push($("#row1").text());
        state.push($("#row2").text());
        return state.push($("#row3").text());
      } else {
        counter = counter - 1;
      };
    });
  });
}

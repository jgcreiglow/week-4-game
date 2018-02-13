$(document).ready(function() {

  var userTotal =0;
  var goalNumber;
  var goalNumber = Math.floor((Math.random() * 120) + 1);
  var wins = 0;
  var losses = 0;

  function resetGame(){
    var userTotal =0;
    var goalNumber;
    var goalNumber = Math.floor((Math.random() * 120) + 1);
  }

  function start() {

    crystalOne = Math.floor((Math.random() * 5) + 1);
    crystalTwo = Math.floor((Math.random() * 10) + 1);
    crystalThree = Math.floor((Math.random() * 15) + 1);
    crystalFour = Math.floor((Math.random() * 20) + 1);


    $("#goalNumber").html('<h2> Your Goal Number is ' + goalNumber + '</h2>');
      $("#userTotal").html('<h3> User Total is  ' + userTotal + '</h3>');

    $("#crystalOne").click(function() {
      userTotal = userTotal + crystalOne;
      $("#userTotal").html('<h3> User Total is  ' + userTotal + '</h3>');
      gameEnd(userTotal, goalNumber)
    });

    $("#crystalTwo").click(function() {
      userTotal = userTotal + crystalTwo;
      $("#userTotal").html('<h3> User Total is  ' + userTotal + '</h3>');
      gameEnd(userTotal, goalNumber)
    });

    $("#crystalThree").click(function() {
      userTotal = userTotal + crystalThree;
      $("#userTotal").html('<h3> User Total is  ' + userTotal + '</h3>');
      gameEnd(userTotal, goalNumber)
    });

    $("#crystalFour").click(function() {
      userTotal = userTotal + crystalFour;
      $("#userTotal").html('<h3> User Total is  ' + userTotal + '</h3>');
      gameEnd(userTotal, goalNumber)
    });

resetGame();
  };

  function gameEnd(userTotal, goalNumber) {
      console.log(userTotal, goalNumber)
    if (userTotal == goalNumber) {
      $("#wins").html('<h3> Wins: ' + wins++ + '</h3>');

      }

    else if (userTotal > goalNumber){
      $("#losses").html('<h3> Losses: ' + losses++ + '</h3>');

    }

  };


  start();


  //gameEnd();
});
// startgame function
// reset function if = random number or >random number

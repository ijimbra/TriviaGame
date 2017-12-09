
            // var input = $("form input:radio")
            //   .wrap("<span></span>")
            //   .parent()

            //   // Prevent form submission
            // $("form").submit(function(e) {
            //   e.preventDefault();
            // });

// start counter at 10 seconds
var counter = 10;

var intervalID;

$("#go-button").on("click", countdown);

function countdown() {
    
    // change the counter number every 1000 milliseconds
    intervalId = setInterval(decrement, 1000);

    //print statement 1
    $(".statement1").append("Hawaii is a country outside of the US.");
    // PUT TRUE/FALSE CHOICE HERE????
    // $("#choiceBox").append(choice);

    //print statement 2
    $(".statement2").append("Marriage ceremonies held in Las Vegas are not legal.");

    //print statement 3
    $(".statement3").append("If you shave your eyebrows, they grow back on your palms.");

    //print statement 4
    $(".statement4").append("Donald Trump is the President of the United States.");

}

function decrement() {

    //decrement the counter number
    counter--;

    //print the counter number
    $("#countdownNumber").html(counter);

      //when the counter hits zero
      if (counter === 0) {
        
        // stop the timer
        clearInterval(intervalId);

        // CALCULATE AND PRINT FINAL TALLY
        // i.e. ADD VALUES FROM EACH TRUE/FALSE BUTTON AND PUT INTO
        // VARIABLES: numCorrect, numIncorrect
      }
}

// HOW DO I MAKE THE TRUE/FALSE RADIO BUTTONS?????
// function choice() {
//     $("form input[type=radio name=TRUE]:checked").val();
// }


// Check if used on mobile or desktop
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    var dateInput = document.getElementById("dateField").value;
    let date = new Date(Date.UTC(dateInput));
    let comparisonDate = new Date(Date.UTC(22, 2, 2023));

    if(date.toISOString() == comparisonDate.toISOString()); {
        moveToCounter();
    }
 }
else 
{


// define the sequence
let tripSequence = ["2", "2", "0", "2"]

let valentineSequence = ["1", "4", "0", "2"]

// set up a variable to track the current input
let input = []

// add the key to the input
document.addEventListener("keydown", function(e) {
  input.push(e.key);

  // check if the last 10 pressed keys match the sequence
  if (input.slice(-4).toString() == tripSequence.toString()) {
    moveToTrip();
  }
  if (input.slice(-4).toString() == valentineSequence.toString()) {
    moveToValentine();
  }
})

}
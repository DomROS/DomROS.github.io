
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


let expectedKeySequence = ["2", "2", "0","2","2","0","2","2"];
let currentKeyIndex = 0;

document.addEventListener('keydown', (event) => {
  let key = event.key;

  if (key === expectedKeySequence[currentKeyIndex]) {
    currentKeyIndex++;

    if (currentKeyIndex === 8) {

        moveToCounter();

    }
  } else {
    currentKeyIndex = 0;
  }
});

}
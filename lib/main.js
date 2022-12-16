function showReturn() {

  var retButton = document.getElementById("returnButton");
  retButton.style.display = null;

  // Set the target time
  var targetTime = 10;
  var elapsedTime = 0;

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Find the distance between now and the count down date
    elapsedTime += 1;
    var currSeconds = targetTime - elapsedTime;

    // Output the result in an element with id="demo"
    document.getElementById("returnBtnSmall").innerHTML =
      "Automatic Redirect after " + currSeconds + " seconds";

    // If the count down is over, write some text
    if (currSeconds <= 0) {
      clearInterval(x);
      document.getElementById("returnBtnSmall").innerHTML = "Redirecting...";
    }
  }, 1000);
}




const form = document.getElementsByTagName("form");

form.addEventListener("load", (event) =>{
  console.log('form loaded');
  const submitButton = document.getElementById("ff-submit-root");

  submitButton.addEventListener("click", (event) =>{
    showReturn();
  });
});
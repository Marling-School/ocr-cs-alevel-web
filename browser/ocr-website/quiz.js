function validateRequiredField(ans, message) {
  if (ans === "") {
    throw message;
  }
}

function onQuizComplete(e) {
  console.log("Marking Quiz...");

  // I'm using a try catch here with the validation
  try {
    // Note the use of the 'name' given to the radio buttons to extract a value
    var firstName = document.forms["quizForm"].firstName.value;
    var climateFactor = document.forms["quizForm"].climateFactor.value;
    var airPollutionCause = document.forms["quizForm"].airPollutionCause.value;
    var greenhouseGas = document.forms["quizForm"].greenhouseGas.value;

    validateRequiredField(firstName, "First Name Required");
    validateRequiredField(climateFactor, "Select a climate factor");
    validateRequiredField(airPollutionCause, "Select an air pollution cause");
    validateRequiredField(greenhouseGas, "Select a greenhouse gas");

    document.getElementById("answersGiven").innerText =
      "Answers Given: " +
      JSON.stringify({ firstName, climateFactor, airPollutionCause });

    var score = 0;

    if (climateFactor === "A3") {
      score += 1;
    }
    if (airPollutionCause === "B1") {
      score += 1;
    }
    if (greenhouseGas === "C2") {
      score += 1;
    }

    var message = "Ok " + firstName + ", you got " + score + "correct";
    document.getElementById("outcome").innerText = message;
  } catch (err) {
    document.getElementById("outcome").innerText = err;
  }
}

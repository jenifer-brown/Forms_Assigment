function validateInput() {
  const nameEl = document.querySelector("#name");
  const emailEl = document.getElementById("email");
  const dateEl = document.querySelector("#date");
  const alive = document.getElementsByName("alive");
  const secretEl = document.querySelector("#secret");
  const requiredBoxes = document.querySelector(".checkboxGroup");
  const clothing = document.querySelector("#clothing");
  let isValid = true;

  // submission details
  let submission = "";

  // add name to submission
  submission += "Name: " + nameEl.value + "\n";

  // check if email is entered and valid
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailEl.value.match(emailRegex)) {
    emailEl.parentElement.querySelector("small").style = "color:red";
    emailEl.parentElement.querySelector("small").innerText =
      "ERROR: You must enter a valid email address";
  } else {
    // add email to submission
    submission += "Email: " + emailEl.value + "\n";

    // reset parameters if previously changed
    emailEl.parentElement.querySelector("small").innerText = "";
  }

  // add date to submission
  submission += "Date: " + dateEl.value + "\n";

  // add alive (y/n) to submission
  for (let i = 0; i < alive.length; i++) {
    if (alive[i].checked) {
      submission += "Is Alive?: " + alive[i].value + "\n";
    }
  }

  // check to see if at least 1 checkbox is checked
  submission += "Animal(s) You Like: ";
  let numChecked = 0;
  for (let i = 0; i < requiredBoxes.children.length; i++) {
    if (
      requiredBoxes.children[i].type === "checkbox" &&
      requiredBoxes.children[i].checked
    ) {
      numChecked++;
      submission += requiredBoxes.children[i].value + " ";
    }
  }
  submission += "\n";

  if (numChecked === 0) {
    requiredBoxes.querySelector("small").style = "color:red";
    requiredBoxes.querySelector("small").innerText =
      "ERROR: I know you like animals. You must choose one!";
  } else {
    requiredBoxes.querySelector("small").innerText = "";
  }

  // check if large text is entered
  if (secretEl.value === "") {
    secretEl.parentElement.querySelector("small").style = "color:red";
    secretEl.parentElement.querySelector("small").innerText =
      "ERROR: Best friends always share secrets! Enter one!";
  } else {
    submission += "Secret: " + secretEl.value + "\n";
    secretEl.parentElement.querySelector("small").innerText = "";
  }

  // add chosen article of clothing
  submission += "Article of Clothing: " + clothing.value + "\n";

  // check how many of the required elemens are invalid
  let numInvalid = 0;

  const smallTexts = document.querySelectorAll("small");

  for (let i = 0; i < smallTexts.length; i++) {
    if (smallTexts[i].innerText !== "") {
      numInvalid++;
    }
  }

  if (numInvalid > 0) {
    document.getElementById("output").innerText =
      "This form is not valid. Redo this form with correct answers and submit again.";
  } else {
    document.getElementById("output").innerText = submission;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var form = document.querySelector(".needs-validation");
  var invalidFeedback = document.querySelector(".invalid-feedback");
  var emailInput = document.querySelector("#emailAddressInput");
  var successEmailSpan = document.querySelector(".successEmail");
  var subscribeButton = document.querySelector(".subscribe");
  var dismissButton = document.querySelector(".dismiss");

  // Function to handle form submission
  function handleFormSubmission(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Check if the form is valid
    if (!form.checkValidity()) {
      // If the form is invalid, display the error message
      invalidFeedback.style.display = "block";
      event.stopPropagation();
    } else {
      // If the form is valid, perform form submission here
      console.log("Form submitted successfully!");

      // Update the success email span with the value of the input
      successEmailSpan.textContent = emailInput.value;

      // Show the success message
      showSuccessMessage();
    }

    // Add 'was-validated' class to the form to show validation styles
    form.classList.add("was-validated");
  }

  // Function to show the success message
  function showSuccessMessage() {
    // Hide the form
    var mainContainer = document.querySelector(".main-container");
    mainContainer.style.display = "none";

    // Show the success message
    var successMessage = document.querySelector(".success");
    successMessage.classList.remove("hide");
  }

  // Function to validate the email input
  function validateEmailInput() {
    if (emailInput.validity.valid) {
      // If the email input is valid, hide the error message and add valid state
      invalidFeedback.style.display = "none";
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
    } else {
      // If the email input is invalid, show the error message and add invalid state
      invalidFeedback.style.display = "block";
      emailInput.classList.remove("is-valid");
      emailInput.classList.add("is-invalid");
    }
  }

  // Function to handle subscribe button click
  function handleSubscribeButtonClick() {
    // Check if the email input is valid
    if (emailInput.validity.valid) {
      // Update the success email span with the value of the input
      successEmailSpan.textContent = emailInput.value;

      // Show the success message
      showSuccessMessage();
    }
  }

  // Function to handle dismiss button click
  function handleDismissButtonClick() {
    // Refresh the page
    location.reload();
  }

  // Add event listener to the form's submit event
  form.addEventListener("submit", handleFormSubmission);

  // Add event listener to the email input's input event
  emailInput.addEventListener("input", validateEmailInput);

  // Add event listener to the subscribe button's click event
  subscribeButton.addEventListener("click", handleSubscribeButtonClick);

  // Add event listener to the dismiss button's click event
  dismissButton.addEventListener("click", handleDismissButtonClick);
});

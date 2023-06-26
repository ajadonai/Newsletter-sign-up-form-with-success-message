# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

I have added screenshots of how my project looks like in different states and you can find them in the `screenshots` folder.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction//) - Bootstrap library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This learning challenge was about email validation and it is only right that I highlight the fact that i learnt how to validate emails using javascript and I am so proud of myself

```js
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



### Continued development

One aspect I will definitly keep working on is my Javascript knowlegde. I feel I am way behind my learn timeline and I need to catch up soon

## Author

- Frontend Mentor - [@ajadonai](https://www.frontendmentor.io/ajadonai/yourusername)
- Twitter - [@devbyadonai](https://www.twitter.com/devbyadonai)
```

/** @format */
const username = document.getElementById("username");
const userError = document.getElementById("userError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const button = document.getElementById("button");
const mobile = document.getElementById("mNumber");
const mError = document.getElementById("mError");
const password = document.getElementById("pwd");
const passError = document.getElementById("pError");
const confirmPass = document.getElementById("cPwd");
const cPasserror = document.getElementById("cPerror");

function validateUserInput() {
  const userName = username.value;
  userNameRegex = /^[A-Za-z.]{3,15}$/;
  if (userName.trim() === "") {
    alert("Please type user name");
  } else if (userNameRegex.test(userName)) {
    userError.innerText = `** ${userName} is a valid User name`;
    userError.style.color = "green";
    userError.style.fontWeight = "bold";
    // return true;
  } else {
    userError.innerText = `** ${userName} is not a valid User name`;
    userError.style.color = "red";
    userError.style.fontWeight = "bold";
  }
  username.value = "";
}

function validateUserEmail() {
  const emailName = email.value;
  console.log(emailName);
  emailRedex =
    /^([A-Za-z0-9 \. _]+)@([A-Za-z]+).([A-Za-z]{2,6})(.[a-z]{2,6})?$/;
  if (emailName.trim() === "") {
    alert("Please type email ID");
  } else if (emailRedex.test(emailName)) {
    emailError.innerText = `** ${emailName} is a valid email ID`;
    emailError.style.color = "green";
    emailError.style.fontWeight = "bold";
  } else {
    emailError.innerText = `** ${emailError} is not a valid email ID`;
    emailError.style.color = "red";
    emailError.style.fontWeight = "bold";
  }
  email.value = "";
}

function passMatch() {
  const myPass = password.value;
  const myConfirmPass = confirmPass.value;
  if (myConfirmPass.trim() === "") {
    alert("Please type valid password");
  } else if (myConfirmPass.match(myPass)) {
    cPasserror.innerText = `** Password Matched`;
    cPasserror.style.color = "green";
    cPasserror.style.fontWeight = "bold";
  } else {
    cPasserror.innerText = `** Password is not Matched`;
    cPasserror.style.color = "red";
    cPasserror.style.fontWeight = "bold";
  }
  confirmPass.value = "";
}

function validatepassWord() {
  const myPass = password.value;
  console.log(myPass);
  passRedex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  //   passRedex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
  if (myPass.trim() === "") {
    alert("Please type valid password");
  } else if (passRedex.test(myPass)) {
    passError.innerText = `** ${myPass} is a valid password`;
    passError.style.color = "green";
    passError.style.fontWeight = "bold";
  } else {
    passError.innerText = `** ${myPass} is not a valid password`;
    passError.style.color = "red";
    passError.style.fontWeight = "bold";
  }

  passMatch();

  password.value = "";
}

function validateMobileNumber() {
  const myMobile = mobile.value;
  const mobileRedex = /(\+88)?-?01[1-9]\d{8}/g;
  if (myMobile.trim() === "") {
    alert("Please type valid mobile number");
  } else if (mobileRedex.test(myMobile)) {
    mError.innerText = `** ${myMobile} is a valid mobile number`;
    mError.style.color = "green";
    mError.style.fontWeight = "bold";
  } else {
    mError.innerText = `** ${myMobile} is not a valid mobile number`;
    mError.style.color = "red";
    mError.style.fontWeight = "bold";
  }
  mobile.value = "";
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  validateUserInput();
  validateUserEmail();
  validateMobileNumber();
  validatepassWord();
});

document.getElementById("regForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!checkPass(password, confirmPassword)) {
    errorMessage.textContent = "The password must be the same";
  } else if (!validatepassword(password)) {
    event.preventDefault();
  }
  let userDetail = {
    username: username,
    email: email,
    password: password,
  };
  console.log(userDetail);
});

function checkPass(password, confirmPassword) {
  return password === confirmPassword;
}

function validatepassword(password) {
  let regExp = /[.,!#?\\-]/;
  if (password.length < 8) {
    errorMessage.textContent = "Password must be greater than 8 characters";
    return false;
  } else if (!password.match(regExp)) {
    errorMessage.textContent = "Password must contain (., !, #, ?, or -)";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}

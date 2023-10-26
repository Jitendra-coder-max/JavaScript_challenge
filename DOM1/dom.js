// Add a label to each of the input fields: username, password, confirm password

// console.log("Hii")

document.getElementById('username')
.insertAdjacentHTML('beforeBegin', '<label for ="username"> Username:  </label> <br>');
document.getElementById('password')
.insertAdjacentHTML('beforeBegin', '<label for=password>passowrd </label> <br>');
document.getElementById('confirmPassword').insertAdjacentHTML('beforeBegin', '<label> ConfirmPassword: </label><br>')
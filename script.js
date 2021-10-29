//declaring variables//
const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector("small");
//function that will work when the "Notify me" button will be clicked//
button.addEventListener("click", function () {
  let value = input.value;
//email format is right and the foeld is not empty//
  if (validate() === true && value != "") {
    alert("Email Submitted!");
    message.innerHTML = null;
    message.classList.remove("message");
    input.classList.remove("error");
  }
//email format is incorrect//
  if (validate() === false) {
    message.innerHTML = "Please provide a valid email";
    message.classList.add("message");
    input.classList.add("error");
  }
//situation when the field is empty//
  if (value === "") {
    message.innerHTML = "Whoops! It looks like you forgot to add your email";
    message.classList.add("message");
    input.classList.add("error");
  }

});
//email format validation pattern//
function validate() {
  let value = input.value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (value.match(pattern)) return true;
  else return false;
}

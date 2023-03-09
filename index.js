let bill_amount = document.getElementById("amount");
let humans = document.getElementById("people");
let tip_buttons = Array.from(document.getElementsByClassName("tip"));
let reset_button = document.getElementById("reset");
let custom_tip_button = document.getElementById("custom");
let tip_percentage, tip_person, total_bill_person;
let bill_amountFilled = false;
let humansFilled = false;
let buttonClicked = false;

tip_buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      tip_buttons.forEach(function (otherbtns){
          otherbtns.classList.remove("btn-selected");
      })
      button.classList.add("btn-selected");
      tip_percentage = parseFloat(button.innerHTML);
      buttonClicked = true;
      calculateTip();
  });
});

custom_tip_button.addEventListener("input", function(event) {
      tip_buttons.forEach(function (button){
        button.classList.remove("btn-selected");
    })
    tip_percentage = parseFloat(event.target.value);
    buttonClicked = true;
    calculateTip();
});

function calculateTip() {
  if (bill_amountFilled && humansFilled && buttonClicked) {
    tip_person = (parseFloat(bill_amount.value) * (0.01 * parseFloat(tip_percentage))) / parseFloat(humans.value);
    total_bill_person = parseFloat(bill_amount.value) / parseFloat(humans.value) + tip_person;
    document.getElementById("tipPerPerson").value = tip_person.toFixed(2);
    document.getElementById("totalPerPerson").value = total_bill_person.toFixed(2);
  }
}

bill_amount.addEventListener("input", function (event) {
  if (bill_amount.value.trim() !== "") {
    bill_amountFilled = true;
    calculateTip();
  } else {
    bill_amountFilled = false;
  }
});

humans.addEventListener("input", function (event) {
  if (humans.value.trim() !== "") {
    humansFilled = true;
    calculateTip();
  } else {
    humansFilled = false;
  }
});

reset_button.addEventListener("click", function(){
    location.reload();
});

document.addEventListener("click", function(event) {
    event.preventDefault();
});
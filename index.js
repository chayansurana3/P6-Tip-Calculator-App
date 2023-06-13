const bill_amount = document.getElementById("amount");
const humans = document.getElementById("people");
const tip_buttons = Array.from(document.getElementsByClassName("tip"));
const reset_button = document.getElementById("reset");
const custom_tip_button = document.getElementById("custom");
const tipDisplay = document.getElementById("tipPerPerson");
const totalDisplay = document.getElementById("totalPerPerson");
let tip_percentage, tip_person, total_bill_person;
let bill_amountFilled = false, humansFilled = false, buttonClicked = false;

tip_buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      tip_buttons.forEach(function (buttonsOtherthanCurrent){
          buttonsOtherthanCurrent.classList.remove("btn-selected");
      })
      button.classList.add("btn-selected");
      tip_percentage = parseFloat(button.innerText);
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
    tipDisplay.value = tip_person.toFixed(2);
    totalDisplay.value = total_bill_person.toFixed(2);
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
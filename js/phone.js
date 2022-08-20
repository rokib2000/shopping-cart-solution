function updatePhoneNumber(isIncrease) {
  const phoneInputFieldElement = document.getElementById("phone-input-field");
  const phoneInputFieldString = phoneInputFieldElement.value;
  const phoneInputField = parseInt(phoneInputFieldString);

  let newPhoneInputField;

  if (isIncrease === true) {
    newPhoneInputField = phoneInputField + 1;
  } else {
    newPhoneInputField = phoneInputField - 1;
  }

  phoneInputFieldElement.value = newPhoneInputField;

  return newPhoneInputField;
}

function updatePhoneTotalPrice(newPhoneInputField) {
  const phoneTotalPrice = newPhoneInputField * 1219;
  const phoneTotalElement = document.getElementById("phone_total");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function () {
  const newPhoneInputField = updatePhoneNumber(true);

  updatePhoneTotalPrice(newPhoneInputField);

  calculateSubTotal();
});

document.getElementById("btn-phone-minus").addEventListener("click", function () {
  const newPhoneInputField = updatePhoneNumber(false);

  updatePhoneTotalPrice(newPhoneInputField);

  calculateSubTotal();
});

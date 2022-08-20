function updateCaseNumber(isIncrease) {
  const caseNumberInputFieldElement = document.getElementById("case-input-field");
  const caseNumberInputFieldString = caseNumberInputFieldElement.value;
  const caseNumberInputField = parseInt(caseNumberInputFieldString);

  let newCaseInputField;

  if (isIncrease === true) {
    newCaseInputField = caseNumberInputField + 1;
  } else {
    newCaseInputField = caseNumberInputField - 1;
  }

  caseNumberInputFieldElement.value = newCaseInputField;

  return newCaseInputField;
}

function updateCaseTotalPrice(newCaseInputField) {
  const caseTotalPrice = newCaseInputField * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseInputField = updateCaseNumber(true);

  updateCaseTotalPrice(newCaseInputField);
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
  const newCaseInputField = updateCaseNumber(false);

  updateCaseTotalPrice(newCaseInputField);
});

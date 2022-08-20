function getTextElementById(elementId) {
  const totalElement = document.getElementById(elementId);
  const currentTotalElementString = totalElement.innerText;
  const currentTotalElement = parseInt(currentTotalElementString);
  return currentTotalElement;
}

function setTextValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementById("phone_total");
  const currentCaseTotal = getTextElementById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;

  setTextValueById("sub-total", currentSubTotal);

  // calculate tax

  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);

  setTextValueById("tax-amount", taxAmount);

  // total

  const totalAmount = currentSubTotal + taxAmount;
  setTextValueById("total-amount", totalAmount);
}

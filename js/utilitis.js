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
}

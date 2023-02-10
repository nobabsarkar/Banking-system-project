/*
    1. add event handler with the withdraw button
    2. get the withdraw amount from the withdraw input field
    2.5. also make sure to convert the input into a number by using parseFloat
    3. Get previous withdrawtotal
    4. calculate total withdraw amount
    4.5. set total withdraw amount
    5. get the previous balance total
    6. calculate new blance total
    6.5. set the new balance total
    7. clear the input field

*/

// step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2
  const withdrwaField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrwaField.value;
  const newWithdrawAmoung = parseFloat(newWithdrawAmountString);

  // step-7
  withdrwaField.value = "";

  if (isNaN(newWithdrawAmoung)) {
    alert("Please provide a valid number");
    return;
  }

  // step-3:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-5
  const balanceTotalElement = document.getElementById("ballance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmoung > previousBalanceTotal) {
    alert("you have no money");
    return;
  }

  // step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmoung;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmoung;
  balanceTotalElement.innerText = newBalanceTotal;
});

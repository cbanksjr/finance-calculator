/** @format */


let deduction = () => {
  const amountInput = document.getElementById("amount");
  const percentInput = document.getElementById("percent");
  const amountDeducted = document.getElementById("amount-deducted");
  const amountRemaining = document.getElementById("total-remaining");

  let amount = Number(amountInput.value);
  let percent = Number(percentInput.value / 100);


  if (amount < 0 || isNaN(amount)) {
    amount = 0;
    amountInput.value = 0;
  }
  
  if (percent < 0 || isNaN(percent)) {
    percent = 0;
    percentInput.value = 0;
  }


  const result = amount * percent;
  amountDeducted.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });

  const remaining = amount - result;
  amountRemaining.textContent = remaining.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

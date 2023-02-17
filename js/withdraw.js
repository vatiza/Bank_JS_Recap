document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrewAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrewAmountString);
    // clear the field
    withdrawField.value = '';
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;



})
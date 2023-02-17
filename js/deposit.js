document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmount);

    // clear the after input 
    depositField.value = '';
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // add new value
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // balance-total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousTotaAmount = parseFloat(previousDepositTotalString);

    const newBalanceTotal = previousTotaAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    
    
});
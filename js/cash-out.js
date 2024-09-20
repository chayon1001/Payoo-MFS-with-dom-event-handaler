document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cash-out-field').value;
    const finalCashOut = parseFloat(cashOut);
    console.log(cashOut);

    const pinNum = document.getElementById('cash-out-pin-number').value;
    console.log(pinNum)

    if(pinNum === '1234'){
        const mainMoney = document.getElementById('current-money').innerText;
        const finalMainMoney = parseFloat(mainMoney);

        const finalCash = finalMainMoney - finalCashOut;


        document.getElementById('current-money').innerText = finalCash;
    }
    else{
        alert('pin number is not okay')
    }
})
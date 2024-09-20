document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('added the money');

    const addedMoney = document.getElementById('money-field').value
    console.log(addedMoney);

    const pinNum = document.getElementById('pin-number').value
    console.log(pinNum);

    if(pinNum === '1234'){
        console.log('if pin number is correct then you can entered our website ')

        const money = document.getElementById('current-money').innerText;
        console.log(money);
       

        const addMoneyNew = parseFloat(addedMoney);
        console.log(typeof addMoneyNew)
        const finalMoney = parseFloat(money);
        console.log(typeof finalMoney)
        
        const updateMoney = finalMoney + addMoneyNew;
        console.log(updateMoney);

        document.getElementById('current-money').innerText = updateMoney;
    }
    else{
        alert('pin number is wrong');
    }
})
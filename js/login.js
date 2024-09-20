// console.log('connected the file');

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
   
    const phoneNumber = document.getElementById('input-text').value;
    const password = document.getElementById('password-text').value
    
    if(phoneNumber === '5' && password === '1234'){
        console.log('you are logged in your website');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or pin');
    }
})
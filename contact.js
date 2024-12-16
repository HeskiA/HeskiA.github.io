const submitButton = document.getElementById('btn');
const emailInput = document.getElementById('exampleFormControlInput1');
const messageInput = document.getElementById('exampleFormControlTextarea1');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (!emailInput.value || !messageInput.value) {
        alert('Molimo unesite email i poruku!');
    }else{
        alert('Poruka poslana!');
        emailInput.value = '';
        messageInput.value = '';
    }
});

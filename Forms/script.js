document.addEventListener("DOMContentLoaded", function() { //validação para de input email
    var emailInput = document.getElementById('emailform');
    emailInput.addEventListener('input', function() {
        var re = /\S+@\S+\.\S+/; // verifica a presença do símbolo @
        if(!re.test(this.value)) {
            this.setCustomValidity("Por favor, insira um endereço de e-mail válido.");
        } else {
            this.setCustomValidity(""); 
        }
        this.reportValidity(); // Dispara a validação 
    });
});

function validarForm() {
    var nameform = document.getElementById('nameform').value;
    var emailform = document.getElementById('emailform').value;
    var ageform = document.getElementById('ageform').value;
    var message = document.getElementById('message');

    message.textContent = '';
    message.classList.remove('erro', 'sucesso');

    if (nameform === '' || emailform === '' || ageform === '') {
        alert('Todos os campos devem ser preenchidos!');
        message.classList.add('erro');
        return;
    }

    if (parseInt(ageform) <= 18) {
        alert('Você deve ter mais de 18 anos para enviar o formulário!');
        message.classList.add('erro');
        return;
    }

    alert('Enviado com sucesso!');
    message.classList.add('sucesso');
}
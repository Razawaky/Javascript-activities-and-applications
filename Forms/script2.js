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

function toggleCampAdd() {
    var checkbox = document.getElementById('adressCheckbox');
    var campAdd = document.getElementById('campAdd');

    if (checkbox.checked) {
        campAdd.classList.remove('hidden');
    } else {
        campAdd.classList.add('hidden');
    }
}

function validarForm() {
    var nameform = document.getElementById('nameform').value;
    var emailform = document.getElementById('emailform').value;
    var ageform = document.getElementById('ageform').value;

    if (nameform === '' || emailform === '' || ageform === '') {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    var checkbox = document.getElementById('adressCheckbox');
    if (checkbox.checked) {
        var adressform = document.getElementById('adressform').value;
        var cityform = document.getElementById('cityform').value;
        var stateform = document.getElementById('stateform').value;

        if (adressform === '' || cityform === '' || stateform === '') {
            alert('Todos os campos devem ser preenchidos!');
            return;
        }
    }
    alert('Enviado com sucesso!');
}
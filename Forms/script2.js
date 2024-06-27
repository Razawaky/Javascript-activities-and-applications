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

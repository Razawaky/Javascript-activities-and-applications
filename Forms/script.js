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
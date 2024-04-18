class Aluno extends Pessoa{
    constructor(matricula, curso, nome, idade, sexo){
        this.matricula = matricula;
        this.matricula = curso;
        super(nome, idade, sexo);
    }
}

module.exports = Aluno;
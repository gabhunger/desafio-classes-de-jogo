//Desafio 03
//Dev: Gabriel Hunger

//O desafio é criar uma classe "herói" com as seguintes propriedades: nome, idade e tipo (mago, guerreiro, monge ou ninja). A classe deve ter um método "atacar" que exibe uma mensagem indicando o tipo de ataque do herói.
 class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
//Escolhi usar um switch para determinar o tipo de ataque com base no tipo do herói, e depois exibir a mensagem correspondente.
    atacar() {
        let ataque;
        switch(this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }
}

//Criando instâncias da classe herói e chamando o método atacar para cada um deles.
const heroi1 = new heroi("Syndra", 99, "mago");
const heroi2 = new heroi("He-Man", 35, "guerreiro");
const heroi3 = new heroi("Dalai Lama", 72, "monge");
const heroi4 = new heroi("Sakura", 17, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
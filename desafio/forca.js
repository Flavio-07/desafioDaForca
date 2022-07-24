class Forca {

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.dados = {
      letrasChutadas: [],
      vidas: 6,
      palavra: []
    }

    for (const _ in palavraSecreta) {
      this.dados.palavra.push("_");
    }
  }

  chutar(letra) {
    if (letra.length > 1) return;
    if (this.dados.letrasChutadas.includes(letra)) return;

    this.dados.letrasChutadas.push(letra);

    if (!this.palavraSecreta.includes(letra)) {
      this.dados.vidas -= 1;
      return;
    }

    for (let posicao = 0; posicao < this.palavraSecreta.length; posicao += 1) {
      if (this.palavraSecreta[posicao] === letra) {
        this.dados.palavra[posicao] = letra;
      }
    }
  }

  buscarEstado() { 
    if (this.dados.vidas === 0) return "perdeu";
    if (this.dados.vidas > 0 && !this.dados.palavra.includes("_")) return "ganhou";
    return "aguardando chute"; 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return this.dados;
  }
}

module.exports = Forca;

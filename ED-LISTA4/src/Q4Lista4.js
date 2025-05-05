function verificarVencedores(sorteados, apostas) {
    let houveSena = false;
    let houveQuina = false;
  
    for (let i = 0; i < apostas.length; i++) {
      let acertos = 0;
  
      for (let j = 0; j < apostas[i].length; j++) {
        if (sorteados.includes(apostas[i][j])) {
          acertos++;
        }
      }
  
      if (acertos === 6) {
        console.log(`Apostador ${i + 1} fez a SENA!`);
        houveSena = true;
      } else if (acertos === 5) {
        console.log(`Apostador ${i + 1} fez a QUINA.`);
        houveQuina = true;
      }
    }
  
    if (!houveSena && !houveQuina) {
      console.log("Não houve ganhadores da sena nem da quina.");
    }
}

export default verificarVencedores;
  

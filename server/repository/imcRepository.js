// repositories/imcRepository.js
const calcularIMC = (peso, altura) => {
    const imc = peso / Math.pow(altura, 2);
    let classificacao;
  
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = 'Obesidade Grau 2';
    } else {
      classificacao = 'Obesidade Grau 3';
    }
  
    return { imc, classificacao };
  };
  
  module.exports = {
    calcularIMC,
  };
  
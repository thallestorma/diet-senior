const calcularIMC = (peso, altura) => {
  const imc = peso / Math.pow(altura, 2);
  let classificacao;

  if (!isNaN(imc)) { // Verifica se o valor de IMC é um número
      const imcArredondado = parseFloat(imc.toFixed(1)); // Arredonda para uma casa decimal

      if (imcArredondado < 18.5) {
          classificacao = 'Abaixo do peso';
      } else if (imcArredondado >= 18.5 && imcArredondado < 24.9) {
          classificacao = 'Peso normal';
      } else if (imcArredondado >= 25 && imcArredondado < 29.9) {
          classificacao = 'Sobrepeso';
      } else if (imcArredondado >= 30 && imcArredondado < 34.9) {
          classificacao = 'Obesidade Grau 1';
      } else if (imcArredondado >= 35 && imcArredondado < 39.9) {
          classificacao = 'Obesidade Grau 2';
      } else {
          classificacao = 'Obesidade Grau 3';
      }

      return { imc: imcArredondado, classificacao };
  } else {
      throw new Error('Valor de IMC inválido');
  }
};

module.exports = {
  calcularIMC,
};

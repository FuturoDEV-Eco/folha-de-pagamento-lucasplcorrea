const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');

function calcularSalarioLiquido(salarioBruto, outrosDescontos = 0) {
  const inss = calcularINSS(salarioBruto);
  const impostoRenda = calcularImpostoRenda(salarioBruto);
  const salarioLiquido = salarioBruto - inss - impostoRenda - outrosDescontos;

  return {
    salarioBruto,
    inss,
    impostoRenda,
    outrosDescontos,
    salarioLiquido
  };
}

module.exports = calcularSalarioLiquido;
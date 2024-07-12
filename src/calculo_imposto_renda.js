function calcularImpostoRenda(salarioBruto) {
  let imposto;

  if (salarioBruto <= 2259.20) {
    imposto = 0;
  } else if (salarioBruto <= 2826.65) {
    imposto = salarioBruto * 0.075 - 169.44;
  } else if (salarioBruto <= 3751.05) {
    imposto = salarioBruto * 0.15 - 381.44;
  } else if (salarioBruto <= 4664.68) {
    imposto = salarioBruto * 0.225 - 662.77;
  } else {
    imposto = salarioBruto * 0.275 - 896.00;
  }

  return imposto;
}

module.exports = calcularImpostoRenda;

function calcularINSS(salarioBruto) {
  let inss;

  if (salarioBruto <= 1412.00) {
    inss = salarioBruto * 0.075;
  } else if (salarioBruto > 1412.00 && salarioBruto <= 2666.68) {
    inss = salarioBruto * 0.09 - 21.18;
  } else if (salarioBruto > 2666.68 && salarioBruto <= 4000.03) {
    inss = salarioBruto * 0.12 - 101.18;
  } else if (salarioBruto > 4000.03 && salarioBruto <= 7786.02) {
    inss = salarioBruto * 0.14 - 181.18;
  } else {
    inss = 7786.02 * 0.14 - 181.18;
  }

  return inss;
}

module.exports = calcularINSS;

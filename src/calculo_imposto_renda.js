function calcularImpostoRenda(salarioBruto) {
    let imposto;
  
    if (salarioBruto <= 2112.00) {
      imposto = 0;
    } else if (salarioBruto <= 2826.65) {
      imposto = (salarioBruto - 2112.00) * 0.075;
    } else if (salarioBruto <= 3751.05) {
      imposto = (salarioBruto - 2826.65) * 0.15 + (2826.65 - 2112.00) * 0.075;
    } else if (salarioBruto <= 4664.68) {
      imposto = (salarioBruto - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 2112.00) * 0.075;
    } else {
      imposto = (salarioBruto - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 2112.00) * 0.075;
    }
  
    return imposto;
  }
  
  module.exports = calcularImpostoRenda;
  
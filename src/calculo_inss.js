function calcularINSS(salarioBruto) {
    let inss;
  
    if (salarioBruto <= 1212.00) {
      inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2427.35) {
      inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 3641.03) {
      inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 7087.22) {
      inss = salarioBruto * 0.14;
    } else {
      inss = 7087.22 * 0.14;
    }
  
    return Math.min(inss, 908.85);
  }
  
  module.exports = calcularINSS;
  
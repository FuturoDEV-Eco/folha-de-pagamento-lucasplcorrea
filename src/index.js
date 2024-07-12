const fs = require('fs');
const PDFDocument = require('pdfkit');
const readline = require('readline');
const calcularSalarioLiquido = require('./calculo_salario_liquido');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gerarPDF(nome, cpf, folha) {
  const doc = new PDFDocument();
  const dir = './folhas_pagamento';
  const filePath = `${dir}/${nome.replace(/ /g, '_')}_${cpf}.pdf`;

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text('--- Folha de Pagamento ---', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Data de Geração: ${new Date().toLocaleDateString()}`);
  doc.text(`Nome: ${nome}`);
  doc.text(`CPF: ${cpf}`);
  doc.moveDown();
  doc.text('--- ---');
  doc.text(`Salário Bruto: ${folha.salarioBruto.toFixed(2)}`);
  doc.text('--- ---');
  doc.text(`INSS: ${folha.inss.toFixed(2)}`);
  doc.text(`Imposto de Renda: ${folha.impostoRenda.toFixed(2)}`);
  doc.text(`Outros Descontos: ${folha.outrosDescontos.toFixed(2)}`);
  doc.text('--- ---');
  doc.text(`Salário Líquido: ${folha.salarioLiquido.toFixed(2)}`);

  doc.end();
}

rl.question('Nome do funcionário: ', (nome) => {
  rl.question('CPF do funcionário: ', (cpf) => {
    rl.question('Mês do pagamento (Numérico): ', (mes) => {
      rl.question('Salário bruto: ', (salarioBruto) => {
        rl.question('Outros descontos: ', (outrosDescontos) => {
          rl.question('Deseja gerar PDF? (s/n): ', (gerarPdf) => {
            const salarioBrutoNum = parseFloat(salarioBruto);
            const outrosDescontosNum = parseFloat(outrosDescontos) || 0;
            const folha = calcularSalarioLiquido(salarioBrutoNum, outrosDescontosNum);

            console.log('--- Folha de Pagamento ---');
            console.log('Data de Geração:', new Date().toLocaleDateString());
            console.log('Nome:', nome);
            console.log('CPF:', cpf);
            console.log('--- ---');
            console.log('Salário Bruto:', folha.salarioBruto.toFixed(2));
            console.log('--- ---');
            console.log('INSS:', folha.inss.toFixed(2));
            console.log('Imposto de Renda:', folha.impostoRenda.toFixed(2));
            console.log('Outros Descontos:', folha.outrosDescontos.toFixed(2));
            console.log('--- ---');
            console.log('Salário Líquido:', folha.salarioLiquido.toFixed(2));

            if (gerarPdf.toLowerCase() === 's') {
              gerarPDF(nome, cpf, folha);
              console.log('PDF gerado com sucesso!');
            }

            rl.close();
          });
        });
      });
    });
  });
});

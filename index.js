const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(
    'http://carf.fazenda.gov.br/sincon/public/pages/ConsultarJurisprudencia/consultarJurisprudenciaCarf.jsf'
  );
  //await page.screenshot({ path: 'example.png' });
  //   await page.focus('input[name=dataInicialInputDate]');
  //   let input = await page.waitForSelector('input[name=dataInicialInputDate]');
  //   await input.value;

  await page.evaluate(async function () {
    document.querySelector('input[name=dataInicialInputDate]').value =
      '01/2019';
    document.querySelector('input[name=dataFinalInputDate]').value = '01/2021';
    document.querySelectorAll('input[name=campo_pesquisa2]')[2].click();
    document.querySelector('input[name=valor_pesquisa2]').value =
      '33000167000101';
    document.querySelector('input[name=botaoPesquisarCarf]').click();
  });

  //   await page.waitFor(5000);
  await page.waitForSelector('.rich-datascr-button');

  await page.evaluate(async () => {
    const cards = document.getElementsByClassName('rich-panel-body');
    console.log(cards);
    const arr = Array.from(cards);

    arr.forEach((item) => {
      console.log(item.children[1]);
    });

    const resultado = document.getElementById('tblJurisprudencia:1:numDecisao');
    //resultado.click();
  });

  //   await page.waitForSelector('.tabelaResultado');

  //   await page.evaluate(async function () {
  //     const div = document.getElementById('formAcordaos:tdivAnexos');
  //     const voltar = document.querySelector('input[value=Voltar]');
  //     div.querySelector('a').click();
  //     setTimeout(() => {
  //       voltar.click();
  //     }, 1000);

  //   });

  //   await page.waitForSelector('#tblJurisprudencia:1:numDecisao', {
  //     visible: true,
  //   });

  //await page.click('input[name=dataInicialInputDate]');
  //   await browser.close();
})();

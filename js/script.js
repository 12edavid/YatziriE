function init() {
  const style = ["style1", "style2", "style3", "style4"];
  const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  const opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let estrelasHTML = "";
  const qtdeEstrelas = 250;
  const constelacao = document.querySelector(".constelacao");
  const largura = window.innerWidth;
  const altura = window.innerHeight;

  for (let i = 0; i < qtdeEstrelas; i++) {
    estrelasHTML += `<span class='estrela ${style[getRandom(0, 4)]} ${opacity[getRandom(0, 6)]} ${tam[getRandom(0, 5)]}' 
      style='animation-delay: .${getRandom(0, 9)}s; left: ${getRandom(0, largura)}px; top: ${getRandom(0, altura)}px;'></span>`;
  }

  constelacao.innerHTML = estrelasHTML;

  let delay = 5000;

  function carregarMeteoro() {
    setTimeout(carregarMeteoro, delay);
    delay = getRandom(5000, 10000);
    const meteoro = `<div class='meteoro ${style[getRandom(0, 4)]}'></div>`;
    document.querySelector('.chuvaMeteoro').innerHTML = meteoro;
    setTimeout(() => {
      document.querySelector('.chuvaMeteoro').innerHTML = "";
    }, 1000);
  }

  setTimeout(carregarMeteoro, delay);
}

window.onload = init;

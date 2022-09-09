var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var verificaChute = document.getElementById("valor").value;
  var chute = parseInt(document.getElementById("valor").value);

  let dica = document.getElementById("dica");

  if (verificaChute === "") {
    elementoResultado.innerHTML = "Ops!! vc esqueceu de digitar um numero :/";
    return;
  }

  while (tentativas < 3) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = " Você é um vidente ! Parabens!!!";
      dica.innerHTML = "";
      console.log("acertou");
      return;
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "Tururu ! Você deve digitar um número entre 0 a 10";
      console.log("digite um número de 0 a 10");
      return;
    } else {
      elementoResultado.innerHTML = "Errou ! Vai lá tenta de novo!";
      console.log("errou");
      tentativas++;
      console.log(tentativas);

      if (chute > numeroSecreto) {
        dica.innerHTML = "E uma dica: tenta menor !";
      }
      if (chute < numeroSecreto) {
        dica.innerHTML = "E uma dica: tenta maior";
      }

      if (tentativas === 3) {
        dica.innerHTML = "";
        elementoResultado.innerHTML =
          "Suas tentativas acabaram. Número secreto era " + numeroSecreto;
      }
    }
    return;
  }
}
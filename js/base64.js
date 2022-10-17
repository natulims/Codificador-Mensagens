var resposta = document.querySelector(".resposta");
var copiar = document.getElementById("copy");

function codificarBase64(mensagem) {
  var codigo = btoa(mensagem);
  resposta.innerText = codigo;
  copiar.style.display = "initial";
}

function decodificarBase64(codigo) {
  var valido = true;
  // para evitar Failed to execute 'atob'
  for (var i = 0; i < codigo.length; i++) {
    var charCode = codigo[i].charCodeAt();
    if (
      !(
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode == 61 ||
        charCode == 43 ||
        charCode == 47 ||
        charCode == 32
      )
    ) {
      valido = false;
      tipo.style.backgroundColor = "lightcoral";
      setTimeout(
        () => (tipo.style.backgroundColor = "#009eff"),
        1000
      );
      tipo.style.transition = "1s";
      break;
    }
  }
  if (valido) {
    var mensagem = atob(codigo);
    resposta.innerText = mensagem;
  }
}

copiar.onclick = () => {
  navigator.clipboard.writeText(resposta.innerText);
}
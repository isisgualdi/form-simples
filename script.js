function verificar(pCheckbox) {
    //document.getElementById('botao').disabled = !pCheckbox.checked
    
    let compBotao = document.getElementById('botao')
    if(pCheckbox.checked) {
      compBotao.disabled = false
    } else {
      compBotao.disabled = true
    }
  }

function mostrarAzul() {
    var img = document.getElementById("inserir-imagem");
    img.innerHTML = '<img src = images/azul.png>'    
}
  
function mostrarVermelho() {
    var img = document.getElementById("inserir-imagem");
    img.innerHTML = '<img src = images/vermelho.png>'   
 }

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    //Teste da function let numero=obterNumeroAleatorio(de, ate);
    //alert(numero);
    let sorteados = [];
    let numero;

    for (let i=0; i < quantidade; i++){
        numero= obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)){
            numero=obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado=document.getElementById('resultado');
resultado.innerHTML= `<label class="campo_texto">Números sorteados: ${sorteados}</label>`;
alterarStatusBotao();
}
function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random()* (max - min + 1)) + min;
}
function alterarStatusBotao(){
    let botao=document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container_botao-desabilitado')){
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container_botao');
    } else {
        botao.classList.remove('container_botao');
        botao.classList.add('container_botao-desabilitado');
    
    }
}
function reiniciar() { 
    document.getElementById('quantidade').value='';
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    document.getElementById('resultado').innerHTML= `<label class="campo_texto">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao();
}


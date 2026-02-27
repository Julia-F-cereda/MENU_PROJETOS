function criarBt(){
    //criando elemento botao
    const btVoltar = document.createElement('button');
    //styles
    btVoltar.innerText = 'Voltar';
    btVoltar.style.marginTop = '20px';
    //criando o click 
    btVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });
    //colocando o botao no body pra aparecer na pg
    document.body.appendChild(btVoltar);
};

window.onload = criarBt();
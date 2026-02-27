const btP1 = document.querySelector('#inputP1');
const btP2 = document.querySelector('#inputP2');
const btP3 = document.querySelector('#inputP3');

//chama um afunção usando esse evento
//o arrow esta sendo usado ai ao inves de escrever function é só colocar arrow
btP1.addEventListener('click', () =>{
    window.location.href ='./pages/projeto01.html'
});

btP2.addEventListener('click', function(){
    window.location.href ='./pages/projeto02.html'
});

btP3.addEventListener('click', function(){
    window.location.href ='./pages/projeto03.html'
});

function criarBt(){
    //criando elemento botao
    const btVoltar = document.createElement('button');
    //styles
    btVoltar.innerText = 'Voltar';
    btVoltar.style.marginTop = '20px';
    //criando o click 

    function navegar(){
        window.location.href = "../index.html"
    };

    btVoltar.addEventListener('click', navegar);


    //colocando o botao no body pra aparecer na pg
    document.body.appendChild(btVoltar);
};

window.onload = criarBt();

//tem que transformar em constantes
//tem que usar if
//eventos, funções, propriedades, objetos, metodos
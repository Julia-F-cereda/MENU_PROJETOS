const btP1 = document.querySelector('#inputP1');
const btP2 = document.querySelector('#inputP2');
const btP3 = document.querySelector('#inputP3');

//chama um afunção usando esse evento

btP1.addEventListener('click', function(){
    window.location.href ='./pages/projeto01.html'
});

btP2.addEventListener('click', function(){
    window.location.href ='./pages/projeto02.html'
});

btP3.addEventListener('click', function(){
    window.location.href ='./pages/projeto03.html'
});

function cacho(x, y){
    return x + y
};

const banana = cacho
//arrow function
const uva = () => 'sou uma fruta';

// function teste(a=0, y=0){
//     return a + y

// };
//  const t = teste;
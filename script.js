//escolha da função
function esc(num){

    switch (num) {

        case 1:
        console.log('Case 1 working')
        document.getElementsByTagName('button')[0].setAttribute('onclick', "calc(document.getElementById('enter').value)");
        document.querySelector('button').innerHTML = 'Calcular';
        break;

        case 2:
        console.log('Case 2 working');
        document.getElementsByTagName('button')[0].setAttribute('onclick', "parImp(document.getElementById('enter').value)");
        document.querySelector('button').innerText = 'Par/Impar';
        break;

        default: 
        console.log('Define a Case');
    }
}

//função de calcular usando eval
function calc(){
   let calc = eval(document.getElementById('enter').value)
   exit.value = calc
}

//função de verificar se é par ou impar
function parImp(n){
    
    if(n%2==0){
        exit.value = 'Numero Par'
    }else{
        exit.value = 'Numero Impar'
    }
}

function alerta(){
    alert('Escolha uma função nos botoẽs ao lado. (Calcular ou Par ou Impar')
}

//trocar para tema escuro/claro
let hora = new Date()
let time = hora.getHours()

if(time > 18 || time <5){
         document.querySelector('head').innerHTML = '<link rel="stylesheet" href="darkStyle.css">'
    }else{
        document.querySelector('head').innerHTML = '<link rel="stylesheet" href="lightStyle.css">'
    }

function theme(){

    if(document.querySelector('head').innerHTML == '<link rel="stylesheet" href="lightStyle.css">' ){
         document.querySelector('head').innerHTML = '<link rel="stylesheet" href="darkStyle.css">'
    }else{
        document.querySelector('head').innerHTML = '<link rel="stylesheet" href="lightStyle.css">'
    }

}
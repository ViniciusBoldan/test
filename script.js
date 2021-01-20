//função de calcular usando eval
function calc(text){
    document.getElementsByTagName('button')[0].setAttribute('onclick', "calc(document.getElementById('enter').value)");
    document.querySelector('button').innerHTML = 'Calcular';
    document.getElementById('enter').placeholder = 'Digite um Calculo'

    exit.value = eval(text)
}

//função de verificar se é par ou impar
function parImp(text){
    document.getElementsByTagName('button')[0].setAttribute('onclick', "parImp(document.getElementById('enter').value)");
    document.querySelector('button').innerText = 'Par/Impar';
    document.getElementById('enter').placeholder = 'Digite um Numero'
    
    if(text%2==0){
        exit.value = 'Numero Par'
    }else{
        exit.value = 'Numero Impar'
    }
}

//contador de caracteres
function counter(text){
    document.getElementsByTagName('button')[0].setAttribute('onclick', "counter(document.getElementById('enter').value)");
    document.querySelector('button').innerText = 'Contar';
    document.getElementById('enter').placeholder = 'Digite Algo'

    exit.value = text.length
}

//converter numero para moeda
function convert(){
    document.getElementsByTagName('button')[0].setAttribute('onclick', "convert(document.getElementById('enter').value)");
    document.querySelector('button').innerText = 'Converter';
    document.getElementById('enter').placeholder = 'Digite um Valor'

    let text = Number(document.getElementById('enter').value)
    exit.value = text.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

//fazer link
function linke(text){
    document.getElementsByTagName('button')[0].setAttribute('onclick', "linke(document.getElementById('enter').value)");
    document.querySelector('button').innerText = 'Linkar';
    document.getElementById('enter').placeholder = 'Digite Algo'

    exit.value = `https://${text}.com`
}


function alerta(){
    alert('Escolha uma função para ser feita num dos botoẽs embaixo. (Calcular, Par ou Impar etc)')
}



//Buscar e mostrar data e hora
let data =  new Date()
let time = [data.getFullYear(), data.getMonth(), data.getDate(), data.getDay(), data.getHours(), data.getMinutes()]
let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
document.getElementById('data').innerHTML = `Data-${time[0]}/ ${time[1]+1}/${time[2]}`
document.getElementById('hora').innerHTML = `${dias[time[3]]}---${time[4]}:${time[5]}`

//trocar para tema escuro/claro
if(time[4] > 18 || time[4] <5){
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
function doIt(){
   let calc = eval(document.getElementById('enter').value)
   exit.value = calc

}


function theme(){
    if(document.querySelector('head').innerHTML == '<link rel="stylesheet" href="indexLight.css">' ){
         document.querySelector('head').innerHTML = '<link rel="stylesheet" href="indexDark.css">'
    }else{
        document.querySelector('head').innerHTML = '<link rel="stylesheet" href="indexLight.css">'
    }
}
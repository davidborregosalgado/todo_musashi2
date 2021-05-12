function saludoretardo2(){

    setTimeout(function(){saludo2()},2000);

}

function saludo2(){ alert('¡Prepárate a conocer la auténtica comida japonesa!');}

window.onload = saludoretardo2;

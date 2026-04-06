
var num = 11;

function contar() {
  num--;
  console.log(num);
  if (num === 1) {
    console.log('¡Se acabó el tiempo!');
    clearInterval(intervalo);
  }
}

const intervalo = setInterval(contar, 1000);
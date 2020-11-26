function triangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3){
        console.log("Este triângulo é EQUILÁTERO");
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("Este triângulo é Isósceles");
    }else{
        console.log("Este triângulo é Escaleno");
    }
}

triangulo(4,1,3);
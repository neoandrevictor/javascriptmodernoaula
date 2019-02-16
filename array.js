//sintaxe literal
var carros=["Ferrari","Fusca","T40"];
console.log(carros.constructor);

//sintaxe OOP
var cars=new Array();
console.log(cars.constructor);
console.dir(Array.prototype);

carros.push("Gol");
carros.unshift("Golf");
carros.splice(2,0,"X6");
carros.splice(4,1,"Up");
//carros.splice(1,1);
carros.sort();
carros.reverse();
//carros.pop();
//carros.shift();
console.log(carros.length);

carros.forEach(function (carro,posicao){
    
    
   
    console.log("chamou",carro,posicao);

});








console.log(carros);
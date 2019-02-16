console.log("===Hoisting===");
var escopo="global";

function testeEscopo(){

    console.log(escopo.toUpperCase());
    escopo="local";
    console.log(escopo.toUpperCase());
}

testeEscopo();
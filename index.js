//Mis variables de entrada
var metrosCuadrados = 0;
var tipoDeInmueble = "";
var valorDeAdministracion = 0;
var valorCuotaDeAseo = 0;
var genero = "";
var edad = 0;
var valorDerechosDeGimnasio = 0;
var cantidadDePersonas = 0;

//capturar datos de entrada
metrosCuadrados = prompt("Digite los metros cuadrados: ");
tipoDeInmueble = prompt('Digite el tipo de inmueble "Casa" o "Apartamento":' );
tipoDeInmueble = tipoDeInmueble.toUpperCase();
cantidadDePersonas = prompt("Ingrese la cantidad de personas que viven en el inmueble: ");

for(var i = 0; i < cantidadDePersonas; i++){

genero = prompt('ingrese género "M" o "F": '+ (i+1));
genero = genero.toLowerCase();
edad = prompt("ingrese su edad: " + (i+1));

}

//Proceso o cálculos del sistema
if(tipoDeInmueble == "CASA"){
    valorDeAdministracion = metrosCuadrados*1500+100000
}else if(tipoDeInmueble == "APARTAMENTO"){
    valorDeAdministracion = metrosCuadrados*1500+50000
}

valorCuotaDeAseo = (valorDeAdministracion * 0.1) + (metrosCuadrados * 1000 )

valorDerechosDeGimnasio += calcularValorDerechosDeGimnasio(edad,genero);

function calcularValorDerechosDeGimnasio(edad,genero){

switch (genero){
    case "m":
        if(edad < 10){
            return 0;
        }else if(edad >= 10 && edad <20){
            return 20000;
        }else if(edad >= 20 && edad <40){
            return 15000;
        }else if(edad >= 40 && edad <= 60){
            derechosDeGimnasio = 10000;
        }else if(edad > 60){
            return 0;
        }break;
    case "f":
        if(edad < 10){
            return  0;
        }else if(edad >=10 && edad <18){
            return 15000;
        }else if(edad >=18 && edad < 35){
            return 12000;
        }else if(edad >= 35 && edad < 55){
            return 8000;
        }else if(edad >=55){
            return 0;
        }

}

}

//Salidas del sistema
console.log("genero: " + genero);
console.log("su edad es de: " + edad);
console.log("derechos de gimnasio: " + valorDerechosDeGimnasio);

document.write("los metros cuadrados son: " + metrosCuadrados + "<br/>");
document.write("el valor de administración: " + valorDeAdministracion + "<br/>");
document.write("el valor de la cuota de aseo es de: " + valorCuotaDeAseo  + "<br/>");
document.write("los derechos de gimnasio son: " + valorDerechosDeGimnasio + "<br/>");
document.write("<br/>");
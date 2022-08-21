
console.log ('script cargado');
'use strict'


let meses = ['ENERO' , 'FEBRERO' , 'MARZO' , 'ABRIL' , 'MAYO' , 'JUNIO' , 'JULIO' , 'AGOSTO' , 'SEPTIEMBRE' , 'OCTUBRE' , 'NOVIEMBRE' , 'DICIEMBRE']
let colres_meses = ['#33dd45' , 'blue' , 'MARZO' , 'ABRIL' , 'MAYO' , 'JUNIO' , 'JULIO' , 'AGOSTO' , 'SEPTIEMBRE' , 'OCTUBRE' , 'NOVIEMBRE' , 'DICIEMBRE']

let semana = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

let nodoWrapper = document.querySelector ('#wrapper');

let str_html = '';

str_html = str_html + `<div class="calendario__wrapper">`;


let year = 2023;

let dia_1_enero = new Date( year, 0, 0 );
console.log( dia_1_enero );
let dia_semana = dia_1_enero.getDay()// Número de la semana
console.log( dia_semana ); // Lunes -> 0, Martes -> 1, Domingo-> 6

let diaSemanaEnCurso = dia_semana+1; // Lunes -> 1 , Martes -> 2
// let diaSemanaEnCurso = 7; // Lunes -> 1 , Martes -> 2

for (let i = 0; i <= 11; i++){
    anual(i)// ENERO - i = 0
}

function anual( numero_mes ){

    str_html = str_html + `<div class="calendario__mes">`;

    str_html = str_html + '<h2 class="calendario__h2">' + meses [ numero_mes  ] + '</h2>';  

    str_html = str_html + `<ul class="calendario__semana">`;

    for (let i = 0; i < semana.length; i++){
        str_html = str_html + '<li class="calendario__dia">' + semana[i] + '</li>'
    }

    str_html = str_html + `</ul>`;

    str_html = str_html + `<ul class="calendario__numeros">`;

    
    let limiteDias = getTotalDias( numero_mes ); //31,30,28
    /* esta variable viene de la funcion donde pongo el ifelse para que me coja el número 
    de días que he delimitado en la función getTotalDias para que me saque cuantos días 
    tiene cada me. hay que traer la funcion aqui para que la pinte luego en su sitio. */
  

    
    for ( let i = 1; i <= limiteDias; i++){

        if( i === 1){
            str_html = str_html + '<li class="calendario__numero" style="grid-column-start:' + diaSemanaEnCurso + ' ">' + i + '</li>';
        }else{
            str_html = str_html + '<li class="calendario__numero">' + i + '</li>';
        }

        diaSemanaEnCurso++;

        if( diaSemanaEnCurso > 7 ){
            diaSemanaEnCurso = 1;
        }

        console.log 
    } // este for es para que me pinte los dias dependiendo de la variable (limiteDias)

    str_html = str_html + `</ul></div>`;
    nodoWrapper.innerHTML = str_html;

    return str_html;
}

function getTotalDias( numero_mes ){ 

    if (numero_mes === 0){  // ENERO
        return 31;
    }else if( numero_mes === 1 ){ // FEBRERO

        if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            return 29;
        }

        return 28;
    }else if( numero_mes === 2 ){ 
        return 30 
    }else if( numero_mes === 3 ){ 
        return 31 
    }else if( numero_mes === 4 ){ 
        return 30 
    }else if( numero_mes === 5 ){ 
        return 31 
    }else if( numero_mes === 6 ){ 
        return 30 
    }else if( numero_mes === 7 ){ 
        return 31
    }else if( numero_mes === 8 ){ 
        return 31 
    }else if( numero_mes === 9 ){ 
        return 30 
    }else if( numero_mes === 10 ){ 
        return 31 
    }else if( numero_mes === 11 ){ 
        return 30 
    }else if( numero_mes === 12 ){ 
        return 31
    }
}

/* Esta es la función que me determina los días que tiene cada mes y la pasamos por el 
parametro de la principal y de la variable de entro para relacionarlas.*/ 



var chalk= require('chalk');
let Trabajo=require('./modulos/trabajo.js');
let Fifo=require('./modulos/fifo.js');

function simular(){
    let queue= new Fifo();
    for(let i=0; i<300; i++){
        let prob= Math.ceil(Math.random()*100);
        let cadena= 'ciclo '+ i + ': ';
        if(prob<=39){//Probabilidad de 39%
            let nombre=String.fromCharCode(65+Math.floor(Math.random()*25))+Math.floor(Math.random()*100);
            let tiempo=Math.floor(Math.random()*8)+3;
            let trabajo= new Trabajo(nombre, tiempo);
            queue.meter(trabajo);
            //console.log(chalk.blue(trabajo.info()));
            cadena+= ' nuevo ' + chalk.blue(trabajo.info());
        }
        // b3  c9  d7  e5
        if(queue.ver()!=null){
            queue.ver().tiempo--;
            cadena += chalk.green(queue.ver().info());
            if(queue.ver().tiempo==0){
                //console.log(chalk.red(queue.ver().info()));
                cadena += ' fin ' + chalk.red(queue.ver().info());
                queue.sacar();
            }
        }
        console.log(cadena);
    }
}

simular();
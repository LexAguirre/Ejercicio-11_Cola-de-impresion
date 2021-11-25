var chalk = require('chalk') 

class trabajo{
    constructor(id, tiempo){
        this.id = id;
        this.tiempo = tiempo;
        this.siguiente = null;
    }

    info(){
        return this.id + `(${this.tiempo})`;
    }

}

class Fifo{
    constructor(){
        this.inicio = null;
    }

    meter(nuevo){
        if(this.inicio == null){
            this.inicio = nuevo;
        } else {
            let temp = this.inicio;
            while(temp.siguiente != null){
                temp = temp.siguiente;
            }
            temp.siguiente = nuevo;
        } 
    }

    sacar(){
        let temp = this.inicio;
        if (this.inicio != null){
            this.inicio = this.inicio.siguiente;
            temp.siguiente = null;
        }
        return temp;
    }

    ver(){
        return this.inicio;
    }
}

function sumular(){
    let queue = new Fifo();
    for(let i = 0; i < 300; i++){
        let prob = Math.ceil(Math.random() * 100);
        if(prob <= 39){//probabilidad de 39
            
            let nombre = String.fromCharCode(65+Math.floor(Math.random()*25))+Math.floor(Math.random()*100)
            let tiempo = Math.floor(Math.random())
            let trabajo = new Trabajo(nombre, tiempo);
            queue.meter(trabajo)
            console.log(chalk.blue(trabajo.info()));
    
        }
        if(queue.ver() != null){
            queue.ver().tiempo--;
            if(queue.ver().tiempo == 0){
                console.log(chalk.red(queue.ver().info()));
                queue.sacar();
            }
        }
    }
}

simular();
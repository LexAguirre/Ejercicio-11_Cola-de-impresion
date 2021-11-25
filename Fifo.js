class Fifo{
    constructor(){
        this.inicio=null;
    }

    meter(nuevo){
        if(this.inicio==null){
            this.inicio=nuevo;
        }else{
            let temp=this.inicio;
            while(temp.siguiente!=null){
                temp=temp.siguiente;
            }
            temp.siguiente=nuevo;
        }
    }

    sacar(){
        let temp=this.inicio;
        //i:
        if(this.inicio!=null){
            this.inicio=this.inicio.siguiente;
            temp.siguiente=null;
        }
        return temp;
    }

    ver(){
        return this.inicio;
    }
}

module.exports=Fifo;

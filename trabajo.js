class Trabajo{
    constructor(id, tiempo){
        this.id=id;
        this.tiempo=tiempo;
        this.siguiente=null;
    }

    info(){
        return this.id + `(${this.tiempo})`;
    }

}
module.exports=Trabajo;
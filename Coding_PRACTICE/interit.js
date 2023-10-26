class Car{

    constructor(model, price){
this.model = model;
this.price = price


    }

    start(){
        console.log(`Car name ${this.model}`)
    }
}

class ElectricCar extends Car {

       dashboard(){
        console.log(`Child Method  ${this.model}`)
       }

    start(){
        super.start();
        this.dashboard();
    }
}

evCar = new ElectricCar('BMW',5000000)

evCar.start();
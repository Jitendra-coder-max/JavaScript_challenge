class Car {
    constructor(model, name){
        this.model = model;
        this.name = name
    }

    start(){
        console.log(`Name of car ${this.name} & model  is ${this.model}`);
    }
}

let car = new Car(620,'bmw');
car.start()
class Conmute {
    travel(transport) {
        return transport.travelTime()
    }
}

class Vehicle {
    travelTime() {
        return this._timeTaken;
    }
}

class Bus extends Vehicle {
    constructor() {
        super()
        this._timeTaken = 10
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this._timeTaken = 5;
    }
}

class PersonalCar extends Vehicle {
    constructor() {
        super()
        this._timeTaken = 3;
    }
}

const conmute = new Conmute()
console.log(conmute.travel(new Taxi()))
console.log(conmute.travel(new Bus()))
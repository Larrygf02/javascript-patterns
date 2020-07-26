//Crea objetos apartir de otro objeto
// utiliza la herencia prototipica en lugar de la herencia clasica
const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    }
}

const myCar = Object.create(car, { owner: { value: 'John'} })
console.log(myCar.__proto__ === car)
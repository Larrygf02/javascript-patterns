function Herof(name, specialAbility) {
    this.name = name
    this.specialAbility = specialAbility
    // declaring a method on the object
    this.getDetails = function() {
        console.log('function')
        return this.name + ' can ' + this.specialAbility
    }
}

class Hero {
    constructor(name, specialAbility) {
        this._name = name
        this._specialAbility = specialAbility
        this.getDetails = function() {
            return `${this._name} can ${this._specialAbility}`
        }
    }
}

const IronMan = new Hero('Iron Man', 'fly')
console.log(IronMan.getDetails())
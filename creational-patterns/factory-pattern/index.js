class Football {
    constructor() {
        this._type = 'football'
        this.kick = function() {
            return 'You kicked the footbal'
        }
    }
}

class FootballAmerican {
    constructor() {
        this._type = 'football-american'
        this.shut = function() {
            return 'You shuted'
        }
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball'
        this.bounce = function() {
            return 'You bounced the basketball'
        }
    }
}

class BallFactory {
    constructor() {
        this.createBall = function(type) {
            let ball;
            if (type === 'football' || type === 'soccer') ball = new Football();
            else if (type === 'basketball') ball = new Basketball();
            else if (type === 'football-american') ball = new FootballAmerican();
            ball.roll = function() {
                return `The ${this._type} is rolling`
            }
            return ball;
        }
    }
}

const factory = new BallFactory()
const myFootball = factory.createBall('football')
const myBasketball = factory.createBall('basketball')
const myFootbalAmerican = factory.createBall('football-american')
console.log(myFootball.roll())
console.log(myBasketball.roll())
console.log(myFootbalAmerican.roll())
console.log(myFootball.kick())
console.log(myBasketball.bounce())
console.log(myFootbalAmerican.shut())
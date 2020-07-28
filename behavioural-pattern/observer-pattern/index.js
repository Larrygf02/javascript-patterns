class Subject {
    constructor() {
        this._observers = []
    }
    subscribe(observer) {
        this._observers.push(observer)
    }
    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => observer !== obs)
    }
    fire(change) {
        this._observers.forEach(observer => {
            observer.update(change)
        })
    }
}
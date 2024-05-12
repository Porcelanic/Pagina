class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}
const dog = new Dog("Hola");
dog.makeSound(); // Output: Buddy barks.
dog.move(10); // Output: Buddy moved 10m.
const cat = new Cat("Whiskers");
cat.makeSound(); // Output: Whiskers meows.
cat.move(5); // Output: Whiskers moved 5m.
//# sourceMappingURL=Context.js.map
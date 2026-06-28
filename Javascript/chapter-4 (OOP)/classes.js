class Car {
    super
    constructor(brandName, speed){
        this.brandName = brandName;
        this.speed = speed;
    }

    printTheSpeedOfCar(date){
        console.log(this.speed, this.brandName, date)
    }

}

const ToyotaGrande = new Car("Toyota Grande", 100);

ToyotaGrande.printTheSpeedOfCar(new Date());
console.log("\n<===================>\n")
// Exmp 2
class Animal {
    constructor(animalSpecie, color){
       this.animalSpecie = animalSpecie;
       this.color = color;
    }
    
    theAnimalIsRunning(){
        console.log(`The ${this.animalSpecie} of color ${this.color} is running in the ground`)
    }
    averageAge(age){
        console.log(`The ${this.animalSpecie}'s age is ${age}`)
    }
}

class Dog extends Animal {
    constructor(dogName, color){
        super(dogName, color)
        this.dogName = dogName;
    }
    preferredBoneSize(){
        console.log(`The preferred bone size that a ${this.dogName} loves is leg of a dear.`)
    }
}

class Cat extends Animal {
    constructor(catName, color){
        super(catName, color)
        this.catName = catName;
    }
    preferredCatFood(){
        console.log(`The preferred cat food that ${this.catName} is paste of falvored fish.`)
    }
}

const BullDog = new Dog("Bull Dog", "black");
const OrangeCat = new Cat("Orange Cat", "orange");

BullDog.preferredBoneSize();
OrangeCat.preferredCatFood();

BullDog.averageAge(24);
OrangeCat.averageAge(5);

BullDog.theAnimalIsRunning();
OrangeCat.theAnimalIsRunning();
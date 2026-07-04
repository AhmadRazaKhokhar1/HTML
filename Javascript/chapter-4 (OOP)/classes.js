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


const student = {
    name:"Ahmad",
    course:"SWE batch 1",
    phone:"03144240550",
    email:"ahmadrazawebexpert@gmail.com",
    printStudentInfo:()=>{
        console.log(`Name:${student.name}\n Course:${student.course}\n Email:${student.email}\n Phone:${student.phone}`)
    }
}


class Student {
   constructor(name, course, email, phone){
        this.name = name;
        this.course = course;
        this.email = email;
        this.phone = phone;
   }

   printStudentInfo(){
    console.log(`Name:${this.name}\n Course:${this.course}\n Email:${this.email}\n Phone:${this.phone}`)
   }
   changeCourse(course){
    this.course = course;
    this.printStudentInfo();
   }
}

// student.printStudentInfo();


const ahmad = new Student("Ahmad", "SWE B-1", "ahmadraza@gmail.com", "03144240550");
const ali = new Student("Ali", "SWE B-3", "ali@gmail.com", "0323420550");


ahmad.printStudentInfo();
ali.printStudentInfo();

ahmad.changeCourse("Marketing B-1");
ali.printStudentInfo();



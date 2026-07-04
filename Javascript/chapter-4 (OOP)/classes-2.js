class Fruit {
    constructor(name, canBeUsedInMilkShake, canBeUsedInJuice){
        this.name = name;
        this.canBeUsedInMilkShake = canBeUsedInMilkShake;
        this.canBeUsedInJuice = canBeUsedInJuice;
    }

    makeMilkShake(){
        if(this.canBeUsedInMilkShake){
            console.log("Here's your milkshake please enjoy!")
        }else{
            console.error(`${this.name} cannot be used in milkshake, please try another fruit`)
        }
    }

    makeJuice(){
        if(this.canBeUsedInJuice){
            console.log("Here's your juice please enjoy!")
        }else{
            console.error(`${this.name} cannot be used in juice, please try another fruit`)
        }
    }

    static printFruitDetais(){
       const abc = 123;
       console.log(abc)
    }
}

class Apple extends Fruit{
    constructor(){
        super("Apple", false, true)
    }

}

class Mango extends Fruit{
    constructor(){
        super("Mango", true, false)
    }
}

const apple = new Apple();

// apple.makeJuice();
// apple.makeMilkShake();

const mango = new Mango();

// mango.makeJuice();
// mango.makeMilkShake();


Apple.printFruitDetais();


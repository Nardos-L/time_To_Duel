class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost,power,resilience) {
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power;
    }
}

class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if( target instanceof Unit ) {
            // implement card text here
            //console.log(target[this.stat]);
            return target[this.stat] +=this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit('redBeltNinja',3,3,4);
console.log(redBeltNinja);

const blackBeltNinja = new Unit('blackBeltNinja',4,5,4);
console.log(blackBeltNinja);

redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);

const hardAlgorithm = new Effect('hardAlgorithm',2,"increase target's resilience by 3",'resilience',+3);
console.log(hardAlgorithm)

hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

const UnhandledPromiseRejection = new Effect('UnhandledPromiseRejection',1,"reduce target's resilience by 2",'resilience',-2);
console.log(UnhandledPromiseRejection);

UnhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja);

const PairProgramming = new Effect('PairProgramming',3,"increase target's power by 2",'power',+2);
console.log(PairProgramming);
PairProgramming.play(redBeltNinja);
console.log(redBeltNinja);


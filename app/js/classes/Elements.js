class Element{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
}

class Poison extends Element{
    constructor(position){
        super("Poison", position);
        this.damage = 10;
    }
}

class Food extends Element{
    constructor(position){
        super("Food", position);
        this.amoutOfHeal = 10;
    }
}

class Wall extends Element{
    constructor(position){
        super("Wall", position);
    }
}

class Empty extends Element{
    constructor(position){
        super("Empty", position);
    }
}

class Minion extends Element{
    constructor(position, genom){
        super("Minion", position);
        this.hp = 50;
        this.maxHp = 100;
        this.genom = genom;
        this.ip = 0;
        this.isDead = false;
    }

    setHp(count){
         probablyHp = this.hp+count;
         if(probablyHp < 0){
             this.isDead = true;
         }
         if(probablyHp < this.maxHp)
         {
             this.hp = probablyHp;
         }
         if(probablyHp >= this.maxHp){
             this.hp = this.maxHp;
         };
    }
    nextIp(count){
        let newIp = (this.ip + count) % 56;
        return newIp;
    }
} 

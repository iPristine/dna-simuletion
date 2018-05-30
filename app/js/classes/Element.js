class Element {
    constructor(position, type) {
        // [x, y]
        this.position = position;
        // { 'empty': 0, 'eat': 1, 'poison': 2, 'wall': 3 }
        this.type = type;
    }

    destroy() {
        this.type = 0;
    }

    getType() {

    }
}

class PoisonElement extends Element {
    constructor(position, type) {
        super(position, type);
    }

    toEat() {
        this.type = 0;
    }

}

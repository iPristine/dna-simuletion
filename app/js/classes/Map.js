class Map {
    constructor() {
        this.renderMap = new Array(30).fill(new Array(30).fill(0));
        this.init();
    }

    init() {
        let randomInteger = (min, max) => {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }
        for (let i = 0; i < 16; i++) {
            let rX = randomInteger(0, this.renderMap[0].length - 1);
            let rY = randomInteger(0, this.renderMap.length - 1);
            this.renderMap[rY][rX] = 1;
            console.log(rX, rY);
        }
        console.log(this.renderMap);
    }
}
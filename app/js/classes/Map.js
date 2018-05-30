class Map {
    constructor() {
        this.renderMap = new Array(30).fill(0).map(e => e = new Array(30).fill(0));
        this.init();
        this.containerElement = $('#map');
        this.ElementArray = [];
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
        }
        console.log(this.renderMap);
    }

    render(isShow) {
        let chooseClass = (value) => {
            if (!isShow) {
                return 'unknow';
            }
            switch (value) {
                case 0:
                    return 'empty';
                    break;
                case 1:
                    return 'minion';
                    break;
                default:
                    return 'empty';
                    break;
            }
        }
        let html = '';
        for (var y = 0; y < this.renderMap.length; y++) {
            html += '<tr>'
            for (var x = 0; x < this.renderMap[0].length; x++) {
                let className = chooseClass(this.battleground[y][x]);
                html += `<td id="${x + '&' + y}" class="${className}" data-x=${x} data-y=${y}></td>`;
            }
            html += '</tr>';
        }
        this.containerElement.html(`<table><tbody>${html}</tbody></table>`)
    }
}
//Soal 1
console.log(`========Soal 1========`);
const luasLingkaran = radius => Math.PI * radius * radius;
const kelilingLingkaran = radius => Math.PI * (radius * 2);

let radius;


console.log(`luas lingkaran dengan jari-jari = ${radius=7} adalah ${luasLingkaran(radius).toFixed(2)}`);
console.log(`keliling lingkaran dengan jari-jari = ${radius=14} adalah ${kelilingLingkaran(radius).toFixed(2)}`);



//soal 2
console.log(`\n========Soal 2========`);
let kalimat = "";
const tambahKata = kata => kalimat = `${kalimat}${kata} `;

const kataBaru = ['saya', 'adalah', 'seorang', 'fronted', 'developer']

kataBaru.forEach(kata => tambahKata(kata));

console.log(kalimat);

//soal 3
console.log(`\n========Soal 3========`);
class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this._totalPage = totalPage;
        this._price = price;
    }
    set name(x) {
        this._name = x;
    }
    get name() {
        return this._name;
    }
    set totalPage(x) {
        this._totalPage = x;
    }
    get totalPage() {
        return this._totalPage;
    }
    set price(x) {
        this._price = x;
    }
    get price() {
        return this._price;
    }
}


class Komik extends Book {
    constructor(name, totalPage, price, bool) {
        super(name, totalPage, price);
        this._isColorful = bool;
    }
    set isColorful(x) {
        this._isColorful = x;
    }
    get isColorful() {
        return this._isColorful;
    }
}

const komikOP = new Komik('one piece', 300, 30000, false);
console.log(komikOP);
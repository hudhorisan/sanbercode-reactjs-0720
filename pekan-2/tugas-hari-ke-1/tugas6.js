//Soal 1
const arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
const properti = ["nama", "jenis kelamin", "hobi", "tahun lahir"];
const daftarPeserta = {};

for (let i = 0; i < arrayDaftarPeserta.length; i++) {
    daftarPeserta[properti[i]] = arrayDaftarPeserta[i];
}
console.log(daftarPeserta);

//Soal 2
const fruits = [{
        'nama': 'strawberry',
        'warna': 'merah',
        'ada bijinya': 'tidak',
        'harga': 9000
    },
    {
        'nama': 'jeruk',
        'warna': 'oranye',
        'ada bijinya': 'ada',
        'harga': 8000
    },
    {
        'nama': 'Semangka',
        'warna': 'Hijau & Merah',
        'ada bijinya': 'ada',
        'harga': 10000
    },
    {
        'nama': 'Pisang',
        'warna': 'Kuning',
        'ada bijinya': 'tidak',
        'harga': 5000
    }

];

console.log(`\ndata pertamanya adalah
nama : ${fruits[0].nama}
warna : ${fruits[0].warna}
ada bijinya : ${fruits[0]["ada bijinya"]}
harga : ${fruits[0].harga}
`);

//Soal 3
const dataFilm = [];

function tambahFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        "nama": nama,
        "durasi": durasi,
        "genre": genre,
        "tahun": tahun
    });
}
//coba isi data
tambahFilm("Gundala", 123, "laga", 2019);

console.log(dataFilm);

//Soal 4
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
    set name(nama) {
        return this._name = nama;
    }
    set legs(jumlah) {
        return this._legs = jumlah;
    }
    set cold_blooded(ada) {
        return this._cold_blooded = ada;
    }
    get name() {
        return this._name;
    }
    get legs() {
        return this._legs;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }

}

const sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }
    yell() {
        return console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
        this._cold_blooded = true;
    }
    jump() {
        return console.log("hop hop");
    }
}

const sungokong = new Ape("kera sakti");
sungokong.yell() // "Auooo"

const kodok = new Frog("buduk");
kodok.jump() // "hop hop" 

//Soal 4
class Clock {
    constructor({
        template
    }) {
        this.template = template;
        this.timer = 0;
        this.rendering = () => {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }
    }

    start() {
        this.rendering;
        this.timer = setInterval(this.rendering, 1000);
    };
    stop() {

        clearInterval(this.timer);
    };

}


const clock = new Clock({
    template: 'h:m:s'
});
clock.start();
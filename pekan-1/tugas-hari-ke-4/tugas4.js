// Soal 1
console.log("")
let i = 2;
console.log(`LOOPING PERTAMA`);
while (i <= 20) {
    console.log(`${i} - I love coding`);
    i += 2;
}

console.log(`LOOPING KEDUA`);
i -= 2;
while (i >= 2) {
    console.log(`${i} - I will become a frontend developer`);
    i -= 2;
}

//Soal 2
console.log("");
for (i = 1; i <= 20; i++) {
    if (i % 2 == 1 && i % 3 == 0) {
        console.log(`${i} - I Love Coding`);
    } else if (i % 2 == 1) {
        console.log(`${i} - Santai`);
    } else if (i % 2 == 0) {
        console.log(`${i} - Berkualitas`);
    }
}


//Soal 3
console.log("")
pagar = '#'
for (i = 1; i <= 7; i++) {
    console.log(pagar);
    pagar += "#";

}

//Soal 4
console.log("");
const kalimat = 'saya sangat senang belajar javascript';
const kata = [];
let start = 0;

for (i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ') {
        kata.push(kalimat.substring(start, i));
        start = i + 1;
    }
}
//push kata terakhir
kata.push(kalimat.substring(start, i));
console.log(kata);

//Soal 5
console.log("");
const daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
i = 0
while (i < daftarBuah.length) {
    for (let y = 0; y < daftarBuah.length; y++) {
        if (daftarBuah[y].substr(0, 1) == (i + 1)) {
            console.log(daftarBuah[y]);
            i += 1;
            break;
        }
    }
}
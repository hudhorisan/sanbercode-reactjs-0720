//Soal 1
function halo() {
    let halo = 'Halo Sanbers!';
    return halo;
}
console.log('jawaban no 1');
console.log(halo());

//Soal 2
function kalikan(angka1, angka2) {
    let hasil = angka1 * angka2;
    return hasil;
}

const num1 = 12;
const num2 = 4;
const hasilKali = kalikan(num1, num2);

console.log(`\njawaban no 2`);
console.log(hasilKali);

//soal 3
function introduce(nama, umur, alamat, hobi) {
    let respon = `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`;
    return respon;
}

const name = "John";
const age = 30;
const address = "Jalan belum jadi";
const hobby = "Gaming";

const perkenalan = introduce(name, age, address, hobby);

console.log(`\njawaban no 3`);
console.log(perkenalan);
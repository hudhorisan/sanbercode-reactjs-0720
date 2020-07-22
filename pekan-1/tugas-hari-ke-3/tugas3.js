//Soal 1
let kataPertama = 'saya';
let kataKedua = 'senang';
let kataKetiga = 'belajar';
let kataKeempat = 'javascript';

console.log(`1. Gabungan katanya adalah ${kataPertama} ${kataKedua.substr(0,1).toUpperCase()}${kataKedua.substring(1)} ${kataKetiga} ${kataKeempat.toUpperCase()}`);

//soal 2
kataPertama = '1';
kataKedua = '2';
kataKetiga = '3';
kataKeempat = '4';

console.log(`2. Jumlah dari semua angka adalah ${parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat)}`);

//soal 3
let kalimat = 'wah javascript itu keren sekali';
kataPertama = kalimat.substring(0, 3);
kataKedua = kalimat.substring(4, 14);
kataKetiga = kalimat.substring(15, 18);
kataKeempat = kalimat.substring(19, 24);
let kataKelima = kalimat.substring(25, 31);

console.log(`3. Kata Pertama: ${kataPertama}
   Kata Kedua: ${kataKedua}
   Kata Ketiga: ${kataKetiga}
   Kata Keempat: ${kataKeempat}
   Kata Kelima: ${kataKelima} `)

//soal 4
let nilai = Math.round((Math.random() * 60 + 40));

if (nilai >= 80) {
    console.log(`Indexmu adalah A`);
} else if (nilai >= 70 && nilai < 80) {
    console.log(`Indexmu adalah B`);
} else if (nilai >= 60 && nilai < 70) {
    console.log(`Indexmu adalah C`);
} else if (nilai >= 50 && nilai < 60) {
    console.log(`Indexmu adalah D`);
} else if (nilai < 50) {
    console.log(`Indexmu adalah E`);
}

//soal 5
let tanggal = 10;
let bulan = 11;
let tahun = 1990;

switch (bulan) {
    case 1:
        console.log(`${tanggal} Januari ${tahun}`);
        break;
    case 2:
        console.log(`${tanggal} Februari ${tahun}`);
        break;
    case 3:
        console.log(`${tanggal} Maret ${tahun}`);
        break;
    case 4:
        console.log(`${tanggal} April ${tahun}`);
        break;
    case 5:
        console.log(`${tanggal} Mei ${tahun}`);
        break;
    case 6:
        console.log(`${tanggal} Juni ${tahun}`);
        break;
    case 7:
        console.log(`${tanggal} Juli ${tahun}`);
        break;
    case 8:
        console.log(`${tanggal} Agustus ${tahun}`);
        break;
    case 9:
        console.log(`${tanggal} September ${tahun}`);
        break;
    case 10:
        console.log(`${tanggal} Oktober ${tahun}`);
        break;
    case 11:
        console.log(`${tanggal} November ${tahun}`);
        break;
    case 12:
        console.log(`${tanggal} Desember ${tahun}`);
        break;
    default:
        console.log(`belum ada tanggal`)
        break;
}
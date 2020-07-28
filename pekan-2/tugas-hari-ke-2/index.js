// di index.js
//Soal 1
const readBooks = require('./callback.js')

const books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
]

// Tulis code untuk memanggil function readBooks di sini

let time = 10000

//versi minimalis tanpa condisional ada bug klo waktu tidak cukup
// readBooks(time, books[0], (a) => {
//     readBooks(a, books[1], (b) => {
//         readBooks(b, books[2], (a) => {
//             console.log(`sisa waktu ${a}`)
//         })
//     })
// })

//versi update 
console.log(`jawaban soal 1`)

if (time > books[0].timeSpent) {
    readBooks(time, books[0], (a) => {
        if (a > books[1].timeSpent) {
            readBooks(a, books[1], (b) => {
                if (b > books[2].timeSpent) {
                    readBooks(b, books[2], (a) => {
                        console.log(`sisa waktu ${a}`)
                    })
                } else if (b < books[2].timeSpent) {
                    let asli = books[2].timeSpent
                    books[2].timeSpent = b;
                    readBooks(b, books[2], (a) => {
                        console.log(`waktu membaca buku kurang membutuhkan tambahan waktu ${asli-a} ms lagi`)
                    })
                } else if (b == books[2].timeSpent) {
                    readBooks(b, books[2], (a) => {
                        console.log(`sisa waktu ${a-b}`)
                    })
                }

            })
        } else if (a < books[1].timeSpent) {
            let asli = books[1].timeSpent;
            books[1].timeSpent = a;
            readBooks(a, books[1], (b) => {
                console.log(`waktu membaca buku kurang membutuhkan tambahan waktu ${asli-b} ms lagi`)
            })
        } else if (a == books[1].timeSpent) {
            readBooks(a, books[1], (b) => {
                console.log(`sisa waktu ${b-a}`)
            })
        }

    })
} else if (time < books[0].timeSpent) {
    let asli = books[0].timeSpent;
    books[0].timeSpent = time;
    readBooks(time, books[0], (a) => {
        console.log(`waktu membaca buku kurang membutuhkan tambahan waktu ${asli-a} ms lagi`)
    })
} else if (time == books[0].timeSpent) {
    readBooks(time, books[0], (a) => {
        console.log(`sisa waktu ${time-a}`)
    })
}
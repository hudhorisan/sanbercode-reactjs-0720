var readBooksPromise = require('./promise.js')
var readBooksPromiseUP = require('./promiseup1.js')

var books = [{
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

// Lanjutkan code untuk menjalankan function readBooksPromise 

let time = 10000;
// versi minimalis ada bug tetap menunggu walau waktu kurang
// function mulaiMembaca() {
//     readBooksPromise(time, books[0])
//         .then(function (terpenuhi) {
//             readBooksPromise(terpenuhi, books[1])
//                 .then(function (terpenuhi) {
//                     readBooksPromise(terpenuhi, books[2])
//                 }, function (message) {
//                     console.log(message)
//                 })
//         }, function (message) {
//             console.log(message)
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }
console.log(`jawaban soal 2`)
// versi update mengubah sedikit di function promis-nya klo tidak boleh di ubah pake fungsi atas aja
function mulaiMembaca() {
    readBooksPromiseUP(time, books[0])
        .then(function (terpenuhi) {
            readBooksPromiseUP(terpenuhi, books[1])
                .then(function (terpenuhi) {
                    readBooksPromiseUP(terpenuhi, books[2])
                }, function (message) {
                    console.log(`perlu tambahan waktu ${message*-1} ms`)
                })
        }, function (message) {
            console.log(`perlu tambahan waktu ${message*-1} ms`)
        })
        .catch(function (error) {
            console.log(`${error}`)
        })
}


mulaiMembaca()
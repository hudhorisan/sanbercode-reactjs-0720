function readBooksPromiseUP(time, book) {
    console.log(`saya mulai membaca ${book.name}`)
    return new Promise(function (resolve, reject) {
        let sisaWaktu = time - book.timeSpent
        if (sisaWaktu >= 0) {
            setTimeout(function () {
                console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
                resolve(sisaWaktu)
            }, book.timeSpent)
        } else {
            setTimeout(function () {
                console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`)
                reject(sisaWaktu)
            }, time)
        }
    })
}

module.exports = readBooksPromiseUP

// setTimeout(function () {
//     let sisaWaktu = time - book.timeSpent
//     if (sisaWaktu >= 0) {
//         console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
//         resolve(sisaWaktu)
//     } else {
//         console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`)
//         reject(sisaWaktu)
//     }
// },)
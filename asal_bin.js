console.log("Bine kadar asal sayilar")


function asalbin() {
    let array = []

    for (let i = 2; i < 1000; i++) {
        let sayi = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                sayi = 1
            }
        }
        if (sayi !== 1) {
            array.push(i)
        }
    }
    console.log(...array)
}

asalbin()
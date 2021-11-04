console.log("ARKADAS")

function arkadas(sayi1, sayi2) {
    let toplam1 = 0
    let toplam2 = 0

    for (let i = 0; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            toplam1 += i
        }
    }

    for (let i = 0; i < sayi2; i++) {
        if (sayi2 % i == 0) {
            toplam2 += i
        }

    }

    if (toplam1 == sayi2 && toplam2 == sayi1) {
        console.log(sayi1 + " ve " + sayi2 + " arkadas sayilardir")
    } else {
        console.log(sayi1 + " ve " + sayi2 + " arkadas sayilardir degildir")
    }

}

arkadas(220, 284)
arkadas(551, 654)
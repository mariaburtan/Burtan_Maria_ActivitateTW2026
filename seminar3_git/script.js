alert("HELLO GUYSSS");

const valori = [7, 12, 9, 15, 27];

function procesareNumere() {
    const maiMariDe10 = valori.filter(x => x > 10);
    console.log("Numere mai mari de 10", maiMariDe10);

    const patrate = maiMariDe10.map(x => x * x);
    console.log("Patratele numerelor mai mari de 10", patrate);

    return patrate;
}

procesareNumere();

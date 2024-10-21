let nilaiAwal = parseInt(prompt("Nilai Awal:"));
let nilaiAkhir = parseInt(prompt("Nilai Akhir:"));


let output = '';


for (let i = nilaiAwal; i <= nilaiAkhir; i++) {
    output += i + ' ';
}

console.log(output.trim());

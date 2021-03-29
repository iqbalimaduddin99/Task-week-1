/*| Nama        | Umur / Tahun |
|-------------|--------------|
|     Bayi    |      0-1     |
|  Anak-anak  |     2-10     |
|    Remaja   |     11-19    |
|    Dewasa   |     20-60    |
| Lanjut Usia |       E      |
Input: 3
Output: Umur 3 tahun adalah Anak-anak*/

const umur = 3;
let nama;

if (umur >= 0 && umur <= 1) {
    nama = "bayi";
} else if (umur >= 2 && umur <= 10) {
    nama = "anak-anak";
} else if (umur >= 11 && umur <= 19) {
    nama = "remaja";
} else if (umur >= 20 && umur <= 60) {
    nama = "dewasa";
} else if (umur == "E" ) {
    nama = "lanjut usia";
}

document.write("<br/> Umur " + umur + " tahun adalah " + nama);



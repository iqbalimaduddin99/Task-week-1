const nilai = 80;
let score;

if (nilai >= 86 && nilai <= 100) {
  score = "A";
} else if (nilai >= 70 && nilai <= 85) {
  score = "B";
} else if (nilai >= 50 && nilai <= 69) {
  score = "C";
} else if (nilai >= 30 && nilai <= 49) {
  score = "D";
} else if (nilai >= 0 && nilai <= 29) {
    score = "D";
}

document.write("<br/> Nilai Anda " + score);



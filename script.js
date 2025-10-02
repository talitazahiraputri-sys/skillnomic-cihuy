let uang = 0; 
let level = 0; 

function naikLevel() {
  uang += 20000; // misalnya dapet 20 ribu

  if (uang >= 20000) {
    level++;
    moveCharacter(level);
  }
}

function moveCharacter(level) {
  const karakter = document.getElementById("character");

  if (level === 1) {
    karakter.style.bottom = "120px"; // pindah ke pulau 1
    karakter.style.left = "40%";
  } else if (level === 2) {
    karakter.style.bottom = "220px"; // pindah ke pulau 2
    karakter.style.left = "60%";
  }
  // lanjut sesuai posisi pulau di map
}

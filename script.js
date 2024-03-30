document.getElementById("iya").addEventListener("click", function () {
  document.getElementById("h1").innerText = "Anda Berbohong!";
  document.getElementById("background").style = "background-color: #E12E2E";
  document.getElementById("gambar").src = "teknisi.png";
  document.getElementById("deskripsi").innerText =
    "Anda adalah seorang Teknisi";
  document.getElementById("semua-tombol").style = "visibility: hidden";
});

document.getElementById("tidak").addEventListener("click", function () {
  document.getElementById("h1").innerText = "Anda Benar!";
  document.getElementById("background").style = "background-color: #6FD240";
  document.getElementById("gambar").src = "mahasiswa.png";
  document.getElementById("deskripsi").innerText =
    "Anda adalah seorang Mahasiswa";
  document.getElementById("semua-tombol").style = "visibility: hidden";
});

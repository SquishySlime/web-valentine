// Fungsi untuk membuat hati jatuh
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
  heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Kecepatan jatuh acak
  document.querySelector('.hearts').appendChild(heart);

  // Hapus hati setelah animasi selesai
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Buat hati setiap 300ms
setInterval(createHeart, 300);

// Interaksi tombol
document.getElementById('heartButton').addEventListener('click', function() {
  // Sembunyikan konten awal
  document.getElementById('initialContent').classList.add('hidden');

  // Tampilkan pesan baru
  const messageElement = document.getElementById('message');
  messageElement.classList.remove('hidden');
  messageElement.innerHTML = `
    Happy Valentine's Day, Sayangkuu! 💖<br>
    Aku berdoa biar kita selalu jadi #CoupleGoals, langgeng sampe tua nanti.<br>
    Thank you for being my everything. You're my forever and always. Love you so much! 💕
  `;
});

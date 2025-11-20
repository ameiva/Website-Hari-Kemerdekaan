const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function onScroll() {
  let scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (
          link.getAttribute('href').substring(1) === section.getAttribute('id')
        ) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScroll);
navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    navLinks.forEach((l) => l.classList.remove('active'));
    this.classList.add('active');

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, 
        behavior: 'smooth',
      });
    }
  });
});

  document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let nama = form.nama.value.trim();
    let email = form.email.value.trim();
    let nisn = form.nisn.value.trim();
    let lomba = form.lomba.value.trim();
    let kelas = form.kelas.value.trim();

    if (/\d/.test(nama)) {
      alert('Nama tidak boleh mengandung angka.');
      return false;
    }
    if (nama.length < 3) {
      alert('Nama minimal 3 karakter.');
      return false;
    }

    if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert('Format email tidak valid!');
      return false;
    }

    if (!/^\d+$/.test(nisn)) {
      alert('NISN hanya boleh berisi angka.');
      return false;
    }
    if (nisn.length < 8 || nisn.length > 10) {
      alert('Panjang NISN harus antara 8 sampai 10 digit.');
      return false;
    }

    if (!lomba) {
      alert('Silakan pilih lomba.');
      return false;
    }

    if (kelas.length < 2) {
      alert('Harap masukkan kelas yang valid.');
      return false;
    }

    alert(`Selamat, ${nama}! Anda berhasil terdaftar untuk lomba ${lomba}, kelas ${kelas}. 🎉`);
    form.reset();
    return true;
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const githubButton = document.querySelector('.visit-btn');

    menuIcon.onclick = function () {
        navLinks.classList.toggle('active');
    };
    githubButton.onclick = function () {
        window.open("https://github.com/GinaFerl", "_blank"); 
    };
});

document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi EmailJS saat DOM dan SDK sudah siap
    emailjs.init("_AXIrlqlSD4aW0fhO"); // Ganti dengan public key kamu
  
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah reload halaman
  
      status.textContent = "⏳ Mengirim...";
      status.style.color = "#555";
  
      emailjs.sendForm("service_webportoID", "webporto_contact", form)
        .then(() => {
          status.textContent = "✅ Pesan berhasil dikirim!";
          status.style.color = "green";
          form.reset();
  
          // Optional: auto-hide pesan setelah 3 detik
          setTimeout(() => status.textContent = "", 3000);
        }, (error) => {
          status.textContent = "❌ Gagal mengirim pesan!";
          status.style.color = "red";
          console.error("EmailJS error:", error);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const githubLink1 = document.getElementById("githubRepoLink");
  const githubLink2 = document.getElementById("githubRepoLink2");

  if (githubLink1) {
    githubLink1.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Sorry, the Github repository is currently unavailable or private.");
    });
  }

  if (githubLink2) {
    githubLink2.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Sorry, the Github repository is currently unavailable or private.");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const liveDemoLink = document.getElementById("liveDemoLink");

    liveDemoLink.addEventListener("click", function (event) {
      event.preventDefault(); // mencegah link default
      alert("Sorry, the Live Demo is currently unavailable or private.");
    });
});
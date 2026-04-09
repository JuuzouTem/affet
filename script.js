const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('main-card');
const successMessage = document.getElementById('success-message');

let yesSize = 1.1; // Başlangıç boyutu (rem)

// Hayır butonuna mouse geldiğinde (veya dokunulduğunda) kaçma fonksiyonu
noBtn.addEventListener('mouseover', () => {
    // Ekran boyutlarını al
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Butonu rastgele bir yere ışınla
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Şerefsizce ekstra: Her kaçtığında Evet butonu büyüsün!
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
});

// Evet butonuna basıldığında
yesBtn.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Konfeti fırlatmak istersen buraya ekleme yapabilirsin
    document.body.style.backgroundColor = "#ffc0cb";
});
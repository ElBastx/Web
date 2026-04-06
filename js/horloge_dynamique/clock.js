let h = 0; let m = 0; let s = 0;

function mettreAJourHorloge() {
maintenant = new Date();
h = maintenant.getHours().toString().padStart(2, '0');
m = maintenant.getMinutes().toString().padStart(2, '0');
s = maintenant.getSeconds().toString().padStart(2, '0');

const baliseHorloge = document.getElementById("horloge");

baliseHorloge.textContent = (`${h}:${m}:${s}`)
}

mettreAJourHorloge()
// Mettre à jour toutes les secondes
setInterval(mettreAJourHorloge, 1000);

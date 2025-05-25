// script.js
console.log("Nettsiden om fotosyntese er lastet!");
console.log("CSS-animasjoner og overganger er aktive.");

// Eksempel på fremtidig bruk:
// Du kan legge til JavaScript her for å trigge animasjoner ved scroll,
// eller for mer komplekse interaksjoner hvis du ønsker det senere.
// For eksempel, legge til en klasse på elementer når de scroller inn i synsfeltet:
/*
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.needs-animation-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Valgfritt: animer kun én gang
            }
        });
    }, { threshold: 0.1 }); // Trigger når 10% av elementet er synlig

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
*/
// For å bruke dette eksempelet, måtte du lagt til klassen 'needs-animation-on-scroll'
// på elementene i HTML, og definert en '.is-visible' klasse i CSS med animasjonen.
// Foreløpig bruker vi kun CSS-on-load animasjoner.
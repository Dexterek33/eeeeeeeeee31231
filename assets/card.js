// card.js

// Funkcja do otwierania stron
function openPage(number) {
    document.querySelector('.opacity').style.display = 'block';
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.querySelector('.page_' + number).style.display = 'block';
}

// Funkcja do zamykania popupu
function closePage() {
    document.querySelector('.opacity').style.display = 'none';
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
}

// Funkcja do przechodzenia między ekranami (tu przekieruj jak u siebie chcesz)
function sendTo(page) {
    switch (page) {
        case 'home':
            window.location.href = 'home.html';
            break;
        case 'documents':
            window.location.href = 'documents.html';
            break;
        case 'services':
            window.location.href = 'services.html';
            break;
        case 'qr':
            window.location.href = 'qr.html';
            break;
        case 'more':
            window.location.href = 'more.html';
            break;
    }
}

// Dane przykładowe
const userData = {
    name: "JAN",
    surname: "KOWALSKI",
    nationality: "POLSKIE",
    birthday: "01.01.1990",
    pesel: "90010112345",
    familyName: "NOWAK",
    sex: "MĘŻCZYZNA",
    fathersFamilyName: "KOWALSKI",
    mothersFamilyName: "NOWAK",
    birthPlace: "WARSZAWA",
    countryOfBirth: "POLSKA",
    adress: "ul. Jasnogórska 10, 00-001 Warszawa",
    homeDate: "01.02.2020",
    updateDate: "12.04.2025 14:05"
};

// Wpisanie danych do dowodu i dodatkowych danych
function fillData() {
    document.getElementById('name').textContent = userData.name;
    document.getElementById('surname').textContent = userData.surname;
    document.getElementById('nationality').textContent = userData.nationality;
    document.getElementById('birthday').textContent = userData.birthday;
    document.getElementById('pesel').textContent = userData.pesel;

    document.getElementById('familyName').textContent = userData.familyName;
    document.getElementById('sex').textContent = userData.sex;
    document.getElementById('fathersFamilyName').textContent = userData.fathersFamilyName;
    document.getElementById('mothersFamilyName').textContent = userData.mothersFamilyName;
    document.getElementById('birthPlace').textContent = userData.birthPlace;
    document.getElementById('countryOfBirth').textContent = userData.countryOfBirth;
    document.getElementById('adress').textContent = userData.adress;
    document.querySelector('.home_date').textContent = userData.homeDate;

    document.querySelector('.bottom_update_value').textContent = userData.updateDate;
}

// Kopiowanie do schowka
document.querySelectorAll('.main_button').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.previousElementSibling.textContent;
        navigator.clipboard.writeText(value).then(() => {
            alert("Skopiowano: " + value);
        });
    });
});

// Zegar
function updateClock() {
    const now = new Date();
    const timeText = now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time').textContent = timeText;
}
setInterval(updateClock, 1000);
updateClock();

// Przycisk aktualizacji
document.querySelector('.update').addEventListener('click', function () {
    const now = new Date();
    const dateText = now.toLocaleDateString('pl-PL') + ' ' + now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
    document.querySelector('.bottom_update_value').textContent = dateText;
    alert("Dane zaktualizowane!");
});

// Uruchamiamy na starcie
fillData();

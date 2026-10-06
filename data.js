/**
 * GermanMaxxing - Statyczna baza danych słownictwa niemieckiego.
 * Struktura: { polish: "...", german: "...", gender: "der/die/das" }
 * Zawiera słownictwo związane ze szkołą, przedmiotami i pomieszczeniami.
 */
const vocabularyData = [
    // Słownictwo Szkolne (A1)
    { polish: "szkoła", german: "Schule", gender: "die" },
    { polish: "uczeń", german: "Schüler", gender: "der" },
    { polish: "uczennica", german: "Schülerin", gender: "die" },
    { polish: "nauczyciel", german: "Lehrer", gender: "der" },
    { polish: "nauczycielka", german: "Lehrerin", gender: "die" },
    { polish: "lekcja", german: "Stunde", gender: "die" },
    { polish: "książka", german: "Buch", gender: "das" },
    { polish: "ołówek", german: "Stift", gender: "der" },
    { polish: "tablica", german: "Tafel", gender: "die" },
    { polish: "zadanie", german: "Aufgabe", gender: "die" },
    { polish: "matura", german: "Abitur", gender: "das"},
    { polish: "zajęcia", german: "Unterricht", gender: "der"},
    { polish: "przerwa obiadowa", german: "Mittagspause", gender: "die"},

    // Przedmioty (Fächer)
    { polish: "matematyka", german: "Mathematik", gender: "die" },
    { polish: "historia", german: "Geschichte", gender: "die" },
    { polish: "język niemiecki", german: "deutsche Sprache", gender: "die" },
    { polish: "biologia", german: "Biologie", gender: "die" },
    { polish: "geografia", german: "Geographie", gender: "die" },
    { polish: "fizyka", german: "Physik", gender: "die" },
    
    // Dodatkowe Przedmioty
    { polish: "chemia", german: "Chemie", gender: "die" },
    { polish: "angielski", german: "Englisch", gender: "das" },
    { polish: "francuski", german: "Französisch", gender: "das" },
    { polish: "muzyka", german: "Musik", gender: "die" },
    { polish: "plastyka", german: "Kunst", gender: "die" },
    { polish: "informatyka", german: "Informatik", gender: "die" },
    { polish: "sport", german: "Sport", gender: "der" },
    { polish: "edukacja fizyczna", german: "Sportunterricht", gender: "der" },

    // Pomieszczenia i miejsca (Orte und Räume)
    { polish: "klasa", german: "Klassenzimmer", gender: "das" },
    { polish: "biblioteka", german: "Bibliothek", gender: "die" },
    { polish: "laboratorium", german: "Labor", gender: "das" },
    { polish: "biologieraum", german: "Biologieraum", gender: "der" },
    { polish: "dyrekcja", german: "Direktion", gender: "die" },
    { polish: "świetlica", german: "Aula", gender: "die" },
    
    // Nowe, szczegółowe miejsca
    { polish: "szkolhof", german: "Schulhof", gender: "der" },
    { polish: "hala sportowa", german: "Turnhalle", gender: "die" },
    { polish: "basen", german: "Schwimmhalle", gender: "die" },
    { polish: "stołówka", german: "Mensa", gender: "die" },
    { polish: "kawiarnia", german: "Cafeteria", gender: "die" },
    { polish: "automat z napojami", german: "Getränkeautomaten", gender: "der" }
];



// Dla celów demonstracyjnych, możemy podzielić dane na quizy
const quizzes = {
    "scuola": {
        title: "Słownictwo Szkolne A1",
        data: vocabularyData.slice(0, 10) // Pierwsze 10 słów
    },
    "rodzajniki": {
        title: "Rodzajniki (Przykłady)",
        data: vocabularyData.slice(10, 15) // Środkowe 5 słów
    },
    "przedmioty": {
        title: "Przedmioty",
        data: vocabularyData.slice(15, 20) // Ostatnie 5 słów
    }
};
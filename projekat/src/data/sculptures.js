const sculptures = [
    {
        id: 1,
        name: "David",
        description: "David is a masterpiece of Renaissance sculpture, created from 1501 to 1504 by the Italian artist Michelangelo. With a height of 5.17-metre (17 ft 0 in), the David was the first colossal marble statue after antiquity, a precedent for the 16th century and beyond.",
        artist: "Michaelangelo Buonarotti",
        value: "400.000,00$",
        aged: 517,
        photo: 'sculpture1',
        idArtist: 2,
        aboutArtist: "Michelangelo di Lodovico Buonarroti Simoni (Italian: [mikeˈlandʒelo di lodoˈviːko ˌbwɔnarˈrɔːti siˈmoːni]; 6 March 1475 – 18 February 1564), known as Michelangelo (English: /ˌmaɪkəlˈændʒəloʊ, ˌmɪk-/), was an Italian sculptor, painter, architect, and poet of the High Renaissance. ",
        ime: "David",
        opis: "Mikelanđelov David je Mikelanđelovo remek-delo iz doba renesanse koje je isklesano u mermeru između 1501. i 1504. godine. Statua, visoka 5,17 m sa osnovom, predstavlja biblijski lik Davida u trenutku koncentracije pred borbu sa Golijatom, a isklesana je kao simbol srednjovekovne države Firence.",
        umetnik: "Mikelanđelo Buonaroti",
        vrednost: "400.000.000,00 din.",
        starost: 517,
        oUmetniku: "Mikelanđelo di Lodoviko Buonaroti Simoni (ital. Michelangelo di Lodovico Buonarroti Simoni; Kapreze, 6. mart 1475 — Rim, 18. februar 1564) bio je italijanski renesansni vajar, slikar, arhitekta i pesnik, jedan od najznamenitijih i najuticajnijih umjetnika istorije evropske umjetnosti."
      },
      {
        id: 2,
        name: "The Abduction of Proserpina",
        description: "The Abduction of Proserpina is a large Baroque marble group sculpture by Italian artist Gian Lorenzo Bernini, executed between 1621 and 1622, when Bernini's career was in its early stage. The group, finished when Bernini was just 23 years old, depicts the abduction of Proserpina, who is seized and taken to the underworld by the god Pluto.",
        artist: "Gian Lorenzo",
        value: "200.000,00$",
        aged: 420,
        photo: 'sculpture2',
        idArtist: 5,
        aboutArtist: "Gian Lorenzo ( Italian Giovanni Lorenzo; 7 December 1598 – 28 November 1680) was an Italian sculptor and architect. While a major figure in the world of architecture, he was more prominently the leading sculptor of his age, credited with creating the Baroque style of sculpture.",
        ime: "Otmica Prozerpine",
        opis: "Prozerpina (Proserpine, Prosperine ili Prosperina) je rimska božica. Njezin je grčki pandan Perzefona. Prozerpina je kći božice zemljoradnje Cerere i Jupitera, boga neba. Opisana je kao mlada lijepa djevojka.",
        umetnik: "Đovani Lorenco Bernini",
        vrednost: "200.000.000,00 din.",
        starost: 420,
        oUmetniku: "Đovani Lorenco Bernini (ital. Giovanni Lorenzo Bernini; Napulj, 7. decembar 1598 — Rim, 28. novembar 1680) je bio italijanski barokni umetnik, vajar i značajan predstavnik baroka u arhitekturi Rima."
      },
      {
        id: 3,
        name: "Perseus with the Head of Medusa",
        description: "Perseus with the Head of Medusa is a bronze sculpture made by Benvenuto Cellini in the period 1545–1554. The sculpture stands on a square base which has bronze relief panels depicting the story of Perseus and Andromeda, similar to a predella on an altarpiece.",
        artist: "Benvenuto Cellini",
        value: "50.000,00$",
        aged: 440,
        photo: 'sculpture3',
        idArtist: 6,
        aboutArtist: "Benvenuto Cellini (3 November 1500 – 13 February 1571) was an Italian goldsmith, sculptor, and author. His best-known extant works include the Cellini Salt Cellar, the sculpture of Perseus with the Head of Medusa, and his autobiography, which has been described as one of the most important documents of the 16th century.",
        ime: "Persej sa Meduzinom glavom",
        opis: "Perzej s Meduzinom glavom je remek-djelo kiparstva manirizma i najslavnije djelo kipara Benvenuta Cellinija koje je izradio od 1545. – 1554. godine.Bročana skulptura stoji na četvrtastoj bazi na trijemu Loggie dei Lanzi na trgu Piazza della Signoria (Gospodski trg) u Firenci. ",
        umetnik: "Benvenuto Čelini",
        vrednost: "50.000.000,00 din.",
        starost: 440,
        oUmetniku: "Benvenuto Čelini (ital. Benvenuto Cellini; Firenca, 1. novembar 1500 — Firenca, 13. februar 1571) bio je italijanski vajar, zlatar, pisac renesanse, muzičar i vojnik."
      }
]

localStorage.setItem("sculptures", JSON.stringify(sculptures));
export default sculptures;
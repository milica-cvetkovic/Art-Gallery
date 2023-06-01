const paintings = [
    {
        id: 1,
        name: "The Last Supper",
        description: "The Last Supper is a mural painting by the Italian High Renaissance artist Leonardo da Vinci, dated to c. 1495–1498. The painting represents the scene of the Last Supper of Jesus with the Twelve Apostles, as it is told in the Gospel of John – specifically the moment after Jesus announces that one of his apostles will betray him.",
        artist: "Leonardo da Vinci",
        value: "100.000,00$",
        aged: 520,
        photo: 'painting1.jpg',
        idArtist: 1,
        aboutArtist: "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
        ime: "Tajna večera",
        opis: "Tajna večera ili Poslednja večera (ital. Ultima Cena) jedno je od najznačajnijih dela Leonarda da Vinčija, a smatra je jednim od najvećih svetskih umetničkih remek-dela. Slikana tehnikom freske, nastala je u periodu renesanse, verovatno od 1494. do 1498. godine.",
        umetnik: "Leonardo da Vinči",
        vrednost: "100.000.000,00 din.",
        starost: 520,
        oUmetniku: "Leonardo di ser Pjero da Vinči (ital. Leonardo di ser Piero da Vinci, Vinči, 15. april 1452 — Amboaz, 2. maj 1519), poznat kao Leonardo da Vinči, bio je italijanski renesansni arhitekta, pronalazač, inženjer, vajar i slikar."
      },
      {
        id: 2,
        name: "The Creation od Adam",
        description: "The Creation of Adam (Italian: Creazione di Adamo) is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man.",
        artist: "Michaelangelo Buonarotti",
        value: "50.000,00$",
        aged: 540,
        photo: "painting2.jpg",
        idArtist: 2,
        aboutArtist: "Michelangelo di Lodovico Buonarroti Simoni (Italian: [mikeˈlandʒelo di lodoˈviːko ˌbwɔnarˈrɔːti siˈmoːni]; 6 March 1475 – 18 February 1564), known as Michelangelo (English: /ˌmaɪkəlˈændʒəloʊ, ˌmɪk-/), was an Italian sculptor, painter, architect, and poet of the High Renaissance. ",
        ime: "Stvaranje Adama",
        opis: "Stvaranje Adama (ital. Creazione di Adamo) jedan je od devet prizora na najvišem delu svoda Sikstinske kapele. Ova freska je danas jedna od najprepoznatljivijih slika na svetu.",
        umetnik: "Mikelanđelo Buonaroti",
        vrednost: "50.000.000,00 din.",
        starost: 540,
        oUmetniku: "Mikelanđelo di Lodoviko Buonaroti Simoni (ital. Michelangelo di Lodovico Buonarroti Simoni; Kapreze, 6. mart 1475 — Rim, 18. februar 1564) bio je italijanski renesansni vajar, slikar, arhitekta i pesnik, jedan od najznamenitijih i najuticajnijih umjetnika istorije evropske umjetnosti."
      },
      {
        id:3,
        name: "The Birth of Venus",
        description: "The Birth of Venus (Italian: Nascita di Venere [ˈnaʃʃita di ˈvɛːnere]) is a painting by the Italian artist Sandro Botticelli, probably executed in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown (called Venus Anadyomene and often depicted in art).",
        artist: "Sandro Botticelli",
        value: "70.000,00$",
        aged: 500,
        photo: "painting3.jpg",
        idArtist: 4,
        aboutArtist: "Short description",
        ime: "Rođene Venere",
        opis: "Rođenje Venere (ital. Nascita di Venere) je slika nastala oko 1484. godine od strane Botičelija. Ne zna se ko je naručio čuvenu sliku koja je pripadala Đovaniju Lorencu di Pjerfrančesku Medičiju. Za njeno razumevanje postoje različita tumačenja i sva su vezana za rođenje ili pojavljivanje Venere i za klasičnu temu o Veneri Anadiomeni, boginji koja se izdiže iz morske pene.",
        umetnik: "Sandro Botičeli",
        vrednost: "70.000.000,00 din.",
        starost: 500,
        oUmetniku: "Sandro Botičeli (ital. Sandro Botticelli), pravo ime Alesandro Marijano Filipepi (ital. Alessandro Mariano Filipepi), rođen je u Firenci 1. marta 1445, a umro 17. maja 1510. Bio je italijanski slikar firentinske škole ranog renesansnog slikarstva."
      }
]

localStorage.setItem("paintings", JSON.stringify(paintings));
export default paintings;
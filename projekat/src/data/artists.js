const artists = [
    {
        id: 1,
        name: "Leonardo da Vinci",
        biography: "Leonardo di ser Piero da Vinci (15 April 1452 - 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. Born out of wedlock to a successful notary and a lower-class woman in, or near, Vinci, he was educated in Florence by the Italian painter and sculptor Andrea del Verrocchio. He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan.",
        photo: "artist_1.jpg",
        listArtworks: "LeonardoDaVinciEnglish.pdf",
        spisakDela: "LeonardoDaVinciSerbian.pdf",
        ime: "Leonardo da Vinči",
        opis: "Leonardo di ser Pjero da Vinči (ital. Leonardo di ser Piero da Vinci, Vinči, 15. april 1452 — Amboaz, 2. maj 1519), poznat kao Leonardo da Vinči, bio je italijanski renesansni arhitekta, pronalazač, inženjer, vajar i slikar."
    },
    {
        id: 2,
        name: "Michelangelo Buonarotti",
        biography: "Michelangelo di Lodovico Buonarroti Simoni (6 March 1475 - 18 February 1564), known as Michelangelo, was an Italian sculptor, painter, architect, and poet of the High Renaissance. Born in the Republic of Florence, his work was inspired by models from classical antiquity and had a lasting influence on Western art. Michelangelo achieved fame early; two of his best-known works, the Pietà and David, were sculpted before the age of thirty.",
        photo: "artist_2.jpg",
        listArtworks: "MichelangeloBuonarottiEnglish.pdf",
        spisakDela: "MichelangeloBuonarottiSerbian.pdf",
        ime: "Mikelanđelo Buonaroti",
        opis: "Mikelanđelo di Lodoviko Buonaroti Simoni (ital. Michelangelo di Lodovico Buonarroti Simoni; Kapreze, 6. mart 1475 — Rim, 18. februar 1564) bio je italijanski renesansni vajar, slikar, arhitekta i pesnik, jedan od najznamenitijih i najuticajnijih umjetnika istorije evropske umjetnosti."
    },
    {
        id: 4,
        name: "Sandro Boticelli",
        biography: "Alessandro di Mariano di Vanni Filipepi (c. 1445 - May 17, 1510), known as Sandro Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work. Since then, his paintings have been seen to represent the linear grace of late Italian Gothic and some Early Renaissance painting, even though they date from the latter half of the Italian Renaissance period.",
        photo: "artist_4.jpg",
        listArtworks: "SandroBoticelliEnglish.pdf",
        spisakDela: "SandroBoticelliSerbian.pdf",
        ime: "Sandro Botičeli",
        opis: "Sandro Botičeli (ital. Sandro Botticelli), pravo ime Alesandro Marijano Filipepi (ital. Alessandro Mariano Filipepi), rođen je u Firenci 1. marta 1445, a umro 17. maja 1510. Bio je italijanski slikar firentinske škole ranog renesansnog slikarstva."
    },
    {
        id: 5,
        name: "Gian Lorenzo",
        biography: "Gian Lorenzo ( Italian Giovanni Lorenzo; 7 December 1598 – 28 November 1680) was an Italian sculptor and architect. While a major figure in the world of architecture, he was more prominently the leading sculptor of his age, credited with creating the Baroque style of sculpture.",
        photo: "artist_5.jpg",
        listArtworks: "GianLorenzoEnglish.pdf",
        spisakDela: "GianLorenzoSerbian.pdf",
        ime: "Đovani Lorenco Bernini",
        opis: "Đovani Lorenco Bernini (ital. Giovanni Lorenzo Bernini; Napulj, 7. decembar 1598 — Rim, 28. novembar 1680) je bio italijanski barokni umetnik, vajar i značajan predstavnik baroka u arhitekturi Rima."
    },
    {
        id: 6,
        name: "Benvenuto Cellini",
        biography: "Benvenuto Cellini (3 November 1500 – 13 February 1571) was an Italian goldsmith, sculptor, and author. His best-known extant works include the Cellini Salt Cellar, the sculpture of Perseus with the Head of Medusa, and his autobiography, which has been described as one of the most important documents of the 16th century.",
        photo: "artist_6.jpg",
        listArtworks: "BenvenutoCelliniEnglish.pdf",
        spisakDela: "BenvenutoCelliniSerbian.pdf",
        ime: "Benvenuto Čelini",
        opis: "Benvenuto Čelini (ital. Benvenuto Cellini; Firenca, 1. novembar 1500 — Firenca, 13. februar 1571) bio je italijanski vajar, zlatar, pisac renesanse, muzičar i vojnik."
    },
    {
        id: 7,
        name: "Albrecht Dürer",
        biography: "Albrecht Dürer was a German painter, printmaker, and theorist of the German Renaissance. Born in Nuremberg, Dürer established his reputation and influence across Europe in his twenties due to his high-quality woodcut prints. He was in contact with the major Italian artists of his time, including Raphael, Giovanni Bellini, and Leonardo da Vinci, and from 1512 was patronized by Emperor Maximilian I.",
        photo: "artist_7.jpg",
        listArtworks: "AlbrechtDurerEnglish.pdf",
        spisakDela: "AlbrechtDurerSerbian.pdf",
        ime: "Albreht Direr",
        opis:"Albreht Direr (nem. Albrecht Dürer; Nirnberg, 21. maj 1471. — Nirnberg, 6. april 1528) bio je nemački renesansni slikar, grafičar i teoretičar umetnosti. Bio je jedan od najvećih majstora umetnosti u doba humanizma i reformacije."
    },
    {
        id: 8,
        name: "Dante Alighieri",
        biography: "Dante Alighieri was an Italian poet, writer and philosopher. His Divine Comedy, originally called Comedìa (modern Italian: Commedia) and later christened Divina by Giovanni Boccaccio, is widely considered one of the most important poems of the Middle Ages and the greatest literary work in the Italian language.",
        photo: "artist_8.jpg",
        listArtworks: "DanteAlighieriEnglish.pdf",
        spisakDela: "DanteAlighieriSerbian.pdf",
        ime: "Dante Aligijeri",
        opis: "Dante Aligijeri (maj/jun 1265 — Ravena, 14. septembar 1321) bio je najveći italijanski pesnik kasnog srednjeg veka. Njegovo najveće delo, Božanstvena komedija, prvenstveno objavljena pod nazivom Komedija, a kasnije je Bokačo dodao epitet „božanstvena“, predstavlja kulminaciju srednjovekovnog pogleda na svet i osnovu modernog italijanskog jezika."
    },
];

localStorage.setItem("artists", JSON.stringify(artists));
export default artists;
const others = [
  {
    id: 1,
    name: "Vitruvian Man",
    description: "The Vitruvian Man is a drawing by the Italian Renaissance artist and scientist Leonardo da Vinci, dated to c. 1490. Inspired by the writings of the ancient Roman architect Vitruvius, the drawing depicts a nude man in two superimposed positions with his arms and legs apart and inscribed in both a circle and square.",
    artist: "Leonardo da Vinci",
    value: "800.000,00$",
    aged: 550,
    photo: 'art1',
    idArtist: 1,
    aboutArtist: "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
    ime: "Vitruvijev čovek",
    opis: "Vitruvijev čovek je svetski poznati crtež koji je nacrtao Leonardo da Vinči iz oko 1487. godine u jednoj od svojih beležnica. Uz crtež se nalaze i beleške temeljene na delu slavnog starorimskog arhitekte Vitruvija. Izveden je mastilom i perom na papiru, a prikazuje figuru muškarca u dva polažaja koji se preklapaju, s raširenim rukama (u jednoj) te raširenim rukama i nogama (u drugoj), dok su oko njih opisani kružnica i kvadrat.",
    umetnik: "Leonardo da Vinči",
    vrednost: "800.000.000,00 din.",
    starost: 550,
    oUmetniku: "Leonardo di ser Pjero da Vinči (ital. Leonardo di ser Piero da Vinci, Vinči, 15. april 1452 — Amboaz, 2. maj 1519), poznat kao Leonardo da Vinči, bio je italijanski renesansni arhitekta, pronalazač, inženjer, vajar i slikar."
  },
    {
      id: 2,
      name: "Praying Hands",
      description: "Praying Hands (German: Betende Hände), also known as Study of the Hands of an Apostle (Studie zu den Händen eines Apostels), is a pen-and-ink drawing by the German printmaker, painter and theorist Albrecht Dürer. The work is today stored at the Albertina museum in Vienna, Austria.",
      artist: "Albrecht Dürer",
      value: "40.000,00$",
      aged: 520,
      photo: 'art2',
      idArtist: 1,
      aboutArtist: "Albrecht Dürer was a German painter, printmaker, and theorist of the German Renaissance. Born in Nuremberg, Dürer established his reputation and influence across Europe in his twenties due to his high-quality woodcut prints. He was in contact with the major Italian artists of his time, including Raphael, Giovanni Bellini, and Leonardo da Vinci, and from 1512 was patronized by Emperor Maximilian I.",
      ime: "Ruke koje se mole",
      opis: "Ruke koje se mole ili Ruke u molitvi je crtež-studija nemačkog renesansnog slikara i grafičara, Albrehta Direra, rađen kistom crno-belom tehnikom na plavom bojom prepariranom papiru, 1508. godine. Crtež se smatra studijom za Helerov oltar iz 1509. godine.",
      umetnik: "Albreht Direr",
      vrednost: "40.000.000,00 din.",
      starost: 520,
      oUmetniku: "Albreht Direr (nem. Albrecht Dürer; Nirnberg, 21. maj 1471. — Nirnberg, 6. april 1528) bio je nemački renesansni slikar, grafičar i teoretičar umetnosti. Bio je jedan od najvećih majstora umetnosti u doba humanizma i reformacije."
    },
    {
        id: 3,
        name: "The Divine Comedy",
        description: "The Divine Comedy (Italian: Divina Commedia) is an Italian narrative poem by Dante Alighieri, begun c. 1308 and completed around 1321, shortly before the author's death. It is widely considered the pre-eminent work in Italian literature[1] and one of the greatest works of world literature.",
        artist: "Dante Alighieri",
        value: "70.000,00$",
        aged: 730,
        photo: 'art3',
        idArtist: 1,
        aboutArtist: "Dante Alighieri was an Italian poet, writer and philosopher. His Divine Comedy, originally called Comedìa (modern Italian: Commedia) and later christened Divina by Giovanni Boccaccio, is widely considered one of the most important poems of the Middle Ages and the greatest literary work in the Italian language.",
        ime: "Božanstvena komedija",
        opis: "Božanstvena komedija je poema, književno delo Dantea Aligijerija, koje se smatra najvećom epskom poemom italijanske literature, kao i jednim od najvećih dela svetske literature. Napisana je između 1308. i 1321. godine.",
        umetnik: "Dante Aligijeri",
        vrednost: "70.000.000,00 din.",
        starost: 730,
        oUmetniku: "Dante Aligijeri (maj/jun 1265 — Ravena, 14. septembar 1321) bio je najveći italijanski pesnik kasnog srednjeg veka. Njegovo najveće delo, Božanstvena komedija, prvenstveno objavljena pod nazivom Komedija, a kasnije je Bokačo dodao epitet „božanstvena“, predstavlja kulminaciju srednjovekovnog pogleda na svet i osnovu modernog italijanskog jezika."
      },
];

localStorage.setItem("others", JSON.stringify(others));
export default others;
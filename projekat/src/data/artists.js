const artists = [
    {
        id: 1,
        name: "Leonardo da Vinci",
        biography: "Leonardo di ser Piero da Vinci (15 April 1452 - 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. Born out of wedlock to a successful notary and a lower-class woman in, or near, Vinci, he was educated in Florence by the Italian painter and sculptor Andrea del Verrocchio. He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan.",
        photo: "artist_1.jpg"
    },
    {
        id: 2,
        name: "Michelangelo Buonarotti",
        biography: "Michelangelo di Lodovico Buonarroti Simoni (6 March 1475 - 18 February 1564), known as Michelangelo, was an Italian sculptor, painter, architect, and poet of the High Renaissance. Born in the Republic of Florence, his work was inspired by models from classical antiquity and had a lasting influence on Western art. Michelangelo achieved fame early; two of his best-known works, the Pietà and David, were sculpted before the age of thirty.",
        photo: "artist_2.jpg"
    },
    {
        id: 3,
        name: "Raffaello Sanzio da Urbino",
        biography: "Raffaello Sanzio da Urbino (March 28 or April 6, 1483 - April 6, 1520), better known as Raphael, was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur. Together with Leonardo da Vinci and Michelangelo, he forms the traditional trinity of great masters of that period.",
        photo: "artist_3.jpg"
    },
    {
        id: 4,
        name: "Sandro Boticelli",
        biography: "Alessandro di Mariano di Vanni Filipepi (c. 1445 - May 17, 1510), known as Sandro Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work. Since then, his paintings have been seen to represent the linear grace of late Italian Gothic and some Early Renaissance painting, even though they date from the latter half of the Italian Renaissance period.",
        photo: "artist_4.jpg"
    },
    {
        id: 5,
        name: "Gian Lorenzo",
        biography: "Gian Lorenzo ( Italian Giovanni Lorenzo; 7 December 1598 – 28 November 1680) was an Italian sculptor and architect. While a major figure in the world of architecture, he was more prominently the leading sculptor of his age, credited with creating the Baroque style of sculpture.",
        photo: "artist_5.jpg"
    },
    {
        id: 6,
        name: "Benvenuto Cellini",
        biography: "Benvenuto Cellini (3 November 1500 – 13 February 1571) was an Italian goldsmith, sculptor, and author. His best-known extant works include the Cellini Salt Cellar, the sculpture of Perseus with the Head of Medusa, and his autobiography, which has been described as one of the most important documents of the 16th century.",
        photo: "artist_6.jpg"
    },
    {
        id: 7,
        name: "Albrecht Dürer",
        biography: "Albrecht Dürer was a German painter, printmaker, and theorist of the German Renaissance. Born in Nuremberg, Dürer established his reputation and influence across Europe in his twenties due to his high-quality woodcut prints. He was in contact with the major Italian artists of his time, including Raphael, Giovanni Bellini, and Leonardo da Vinci, and from 1512 was patronized by Emperor Maximilian I.",
        photo: "artist_7.jpg"
    },
    {
        id: 8,
        name: "Dante Alighieri",
        biography: "Dante Alighieri was an Italian poet, writer and philosopher. His Divine Comedy, originally called Comedìa (modern Italian: Commedia) and later christened Divina by Giovanni Boccaccio, is widely considered one of the most important poems of the Middle Ages and the greatest literary work in the Italian language.",
        photo: "artist_8.jpg"
    },
];

localStorage.setItem("artists", JSON.stringify(artists));
export default artists;
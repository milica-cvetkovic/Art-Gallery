const artists = [
    {
        id: 1,
        name: "Leonardo",
        surname: "Da Vinci",
        biography: "Leonardo di ser Piero da Vinci (15 April 1452 - 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. Born out of wedlock to a successful notary and a lower-class woman in, or near, Vinci, he was educated in Florence by the Italian painter and sculptor Andrea del Verrocchio. He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan.",
        photo: "artist_1.jpg"
    },
    {
        id: 2,
        name: "Michelangelo",
        surname: "Buonarotti",
        biography: "Michelangelo di Lodovico Buonarroti Simoni (6 March 1475 - 18 February 1564), known as Michelangelo, was an Italian sculptor, painter, architect, and poet of the High Renaissance. Born in the Republic of Florence, his work was inspired by models from classical antiquity and had a lasting influence on Western art. Michelangelo achieved fame early; two of his best-known works, the Pietà and David, were sculpted before the age of thirty.",
        photo: "artist_2.jpg"
    },
    {
        id: 3,
        name: "Raffaello",
        surname: "Sanzio da Urbino",
        biography: "Raffaello Sanzio da Urbino (March 28 or April 6, 1483 - April 6, 1520), better known as Raphael, was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur. Together with Leonardo da Vinci and Michelangelo, he forms the traditional trinity of great masters of that period.",
        photo: "artist_3.jpg"
    },
    {
        id: 4,
        name: "Sandro",
        surname: "Boticelli",
        biography: "Alessandro di Mariano di Vanni Filipepi (c. 1445 - May 17, 1510), known as Sandro Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work. Since then, his paintings have been seen to represent the linear grace of late Italian Gothic and some Early Renaissance painting, even though they date from the latter half of the Italian Renaissance period.",
        photo: "artist_4.jpg"
    }
];

localStorage.setItem("artists", JSON.stringify(artists));
export default artists;
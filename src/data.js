import { v4 as uuidv4 } from 'uuid';

function musicData() {
    return [
        {
            name: 'Humility Piece',
            artist: 'Psalm Trees',
            cover: 'https://f4.bcbits.com/img/a2061526554_10.jpg',
            id: uuidv4(),
            active: true,
            color: ['#CD0100', '#064179'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=36925'
        },
        {
            name: "Daylight",
            cover:
              "hhttps://i.scdn.co/image/ab67616d0000b273797b1f1ca8576715f8708f65",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Keep Going",
            cover:
              "https://i1.sndcdn.com/artworks-yLb43YcD3dvijU49-tp7T1w-t500x500.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Nightfall",
            cover:
              "hhttps://f4.bcbits.com/img/a1532836563_10.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Reflection",
            cover:
              "https://f4.bcbits.com/img/a1176758100_65",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Under the City Stars",
            cover:
              "https://f4.bcbits.com/img/a2013294891_65",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Highs and Lows",
            cover:
              "https://i1.sndcdn.com/artworks-lahwUlmoUjkEnY8G-9gvvUg-t500x500.jpg",
            artist: "Kissamilé",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36944",
            color: ["#06437A", "#597C44"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Sundials",
            cover:
              "https://f4.bcbits.com/img/a0941640287_65",
            artist: "chief., Shrimpnose",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36944",
            color: ["#D7AAC3", "#3B434A"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Low Tide",
            cover:
              "https://f4.bcbits.com/img/a0631908113_10.jpg",
            artist: "chromonicci, Yasper",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36944",
            color: ["#D19500", "#DACEB6"],
            id: uuidv4(),
            active: false,
          },
        //ADD MORE HERE
    ];
}

export default musicData;
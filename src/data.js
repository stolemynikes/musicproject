import { v4 as uuidv4 } from 'uuid';

function musicData() {
    return [
        {
            name: 'Humility Piece',
            artist: 'Psalm Trees',
            cover: 'https://chillhop.com/wp-content/uploads/2022/05/ce636ede9d5fc9fc2417ce40af98060fbcbdadca-1024x1024.jpg',
            id: uuidv4(),
            active: true,
            color: ['#CD0100', '#064179'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=36925'
        },
        {
            name: "Daylight",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Keep Going",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Nightfall",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Reflection",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Under the City Stars",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Highs and Lows",
            cover:
              "https://chillhop.com/wp-content/uploads/2022/05/9bb8c31852704fe0177b21ee1f674b71027b268f-1024x1024.jpg",
            artist: "Kissamilé",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36944",
            color: ["#06437A", "#597C44"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Sundials",
            cover:
              "https://chillhop.com/wp-content/uploads/2022/07/4f05da370f675eb78a6b92880f93c4e7787935e3-1024x1024.jpg",
            artist: "chief., Shrimpnose",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36944",
            color: ["#D7AAC3", "#3B434A"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Low Tide",
            cover:
              "https://chillhop.com/wp-content/uploads/2022/05/18d934ab6d70d065944aabf9a05bef2a06ce770d-1024x1024.jpg",
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
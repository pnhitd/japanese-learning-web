import VC1 from '../assets/Vocab/VC1.png'
import VC2 from '../assets/Vocab/VC2.png'
import VC3 from '../assets/Vocab/VC3.png'

const vocabData = [
    {
      word: "書く",
      furigana: "かく [THƯ]",
      type: "Động từ nhóm I",
      img: VC1,
      examples: [
        {
          title: "Vẽ",
          sentence: "書く時音楽を聞きます。",
          translation: "Khi tôi vẽ, tôi nghe nhạc.",
        },
        {
          title: "Viết",
          sentence: "私の愛について彼にわざわざ手紙を書く。",
          translation: "Tôi cố tình viết thư cho anh ấy về tình cảm của tôi.",
        },
      ],
    },
    {
      word: "読む",
      furigana: "よむ [ĐỘC]",
      type: "Động từ nhóm I",
      img: VC2,
      examples: [
        {
          title: "Đọc sách",
          sentence: "本を読むのが好きです。",
          translation: "Tôi thích đọc sách.",
        },
      ],
    },
    {
      word: "見る",
      furigana: "みる [KIẾN]",
      type: "Động từ nhóm II",
      img: VC3,
      examples: [
        {
          title: "Nhìn",
          sentence: "星を見るのが好きです。",
          translation: "Tôi thích ngắm sao.",
        },
      ],
    },
]
export default vocabData;

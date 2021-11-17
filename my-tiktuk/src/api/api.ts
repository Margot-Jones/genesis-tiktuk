// import axios, { Method } from "axios";
import { PostProp } from '../types/interface'
import { default as getFeed} from '../assets/getTrendingFeed.json'

export const getTrendingFeed = async ():Promise<PostProp[]> => {
//   const options = {
//     method: "GET" as Method,
//     url: "https://tiktok33.p.rapidapi.com/trending/feed",
//     headers: {
//       "x-rapidapi-host": "tiktok33.p.rapidapi.com",
//       "x-rapidapi-key": '151dd40a87msh1bd8ee1406e994cp1528c0jsna796a6e94e45',
//     },
//   };



  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //     console.log("response.data");
  //     return response.data;
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return getFeed;
};

export const getOnePost = (): PostProp => ({
  id: "7021497851322649862",
  secretID: "7021497851322649862",
  text: "Please make edit🥺🙏🏻 Inst: kikakim🤍",
  createTime: 1634819865,
  authorMeta: {
    id: "6785823001336415238",
    secUid:
      "MS4wLjABAAAAeH_XfG3mng5HdtOKKaKXj-breE3_2JkVUjlF5REet8fu3MeuaOCoRqNV06xcX_U4",
    name: "kikakiim",
    nickName: "Kika Kim",
    verified: false,
    signature:
      "@xoteam\nInstagram: @kikakim\nCooperation: kikakim.booking@gmail.com",
    avatar:
      "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a4777fe51994e2ff798bdc9dd1100846.jpeg?x-expires=1637074800&x-signature=bXK9HwL1RvdmToX3cFZJLh7BKJ0%3D",
    following: 88,
    fans: 24000000,
    heart: 626600000,
    video: 827,
    digg: 6713,
  },
  musicMeta: {
    musicId: "6991751413424491265",
    musicName: "оригинальный звук",
    musicAuthor: "🖤🗑",
    musicOriginal: true,
    musicAlbum: "",
    playUrl:
      "https://sf77-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/6991751385700272898.mp3",
    coverThumb:
      "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/23750ace5956ac4a872bf6649c19f8dc.jpeg?x-expires=1637074800&x-signature=dTDdVFnyufN7ZR5Nui%2FcFibCiFU%3D",
    coverMedium:
      "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/23750ace5956ac4a872bf6649c19f8dc.jpeg?x-expires=1637074800&x-signature=6m8ZFTYXGDMZ5NyBgm9SEUxh7q4%3D",
    coverLarge:
      "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/23750ace5956ac4a872bf6649c19f8dc.jpeg?x-expires=1637074800&x-signature=5HXdBteokH2fI2bOkHAt6d31Edk%3D",
    duration: 7,
  },
  covers: {
    default:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/56846073ab1e4285a468b88929315ea3?x-expires=1637010000&x-signature=HOywLTR8my7qm3lo6jn%2BjR8omV4%3D",
    origin:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/978107d35561420484e7fa34ade6012d_1634819866?x-expires=1637010000&x-signature=VKJcDeiVl%2Fk2QxC9IhVetDNgGF4%3D",
    dynamic:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/4bab1ef85a0e4e5dae1a3a5288ba4807_1634819867?x-expires=1637010000&x-signature=i4pd3wlOC8XmpxjBje48NUhPTWM%3D",
  },
  webVideoUrl: "https://www.tiktok.com/@kikakiim/video/7021497851322649862",
  videoUrl:
    "https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c004/ab709a05928548e7bb521e6c46a85921/?VExpiration=1637078512&VSignature=Kp3q-J1lqE7jTmdzK8xMEw&a=1233&br=3186&bt=1593&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wECRNFGnkag3-I&l=202111161001430101901880173004F28D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anNpNmU6ZjpkOTMzNzczM0ApZjY6NTk6PDs8Nzc2OjU4NmdtcTZicjRfZjZgLS1kMTZzcy41YV9iX2JiXl5fMl8zLS46Yw%3D%3D&vl=&vr=",
  videoUrlNoWaterMark: "",
  videoApiUrlNoWaterMark: "",
  videoMeta: {
    height: 960,
    width: 540,
    duration: 7,
  },
  diggCount: 3300000,
  shareCount: 34800,
  playCount: 25500000,
  commentCount: 33400,
  downloaded: false,
  mentions: [],
  hashtags: [
    {
      id: "1666867608081413",
      name: "ouhmanalta",
      title: "",
      cover: "",
    },
    {
      id: "21461361",
      name: "55555",
      title: "",
      cover: "",
    },
    {
      id: "153828",
      name: "fy",
      title: "",
      cover: "",
    },
    {
      id: "229207",
      name: "fyp",
      title: "",
      cover: "",
    },
    {
      id: "5457735",
      name: "fürdich",
      title:
        "Ein Song der nie vergeht!\n\nMacht mit beim neuen Remix von @diemai 😍  \nEinfach ein Duett machen zur aktuellen Single &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;Für Dich&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; und ein live.ly Meet&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;Greet mit Vanessa Mai gewinnen 🔥",
      cover: "",
    },
    {
      id: "1652484531221509",
      name: "xyzbca",
      title: "",
      cover: "",
    },
    {
      id: "19336",
      name: "humor",
      title:
        "¡Es hora de reírte como nunca! Los videos más divertidos están aquí en TikTok. 😂😂😂",
      cover: "",
    },
    {
      id: "13751",
      name: "joke",
      title: "",
      cover: "",
    },
    {
      id: "7888",
      name: "comedy",
      title:
        "We're excited to introduce #Comedy in the new Categories section! We wanna see your best original comedy skills! 😂 😂 😂",
      cover: "",
    },
  ],
  effectStickers: [
    {
      id: "459476",
      name: "Color Selector",
    },
  ],
});
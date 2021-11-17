// import axios, { Method } from "axios";
import { default as getFeed} from '../lib/getTrendingFeed.json'
import { default as getUser} from '../lib/getUserInfo.json'
import { default as getUserVideo} from '../lib/getUserFeed.json'
import { ItemList } from '../types/video';
import { UserProp } from '../types/user';
import { PostProp } from '../types/feed';


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

export const getUserInfo = async (username: string):Promise<UserProp> => {
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
    return getUser;
};

export const getUserFeedVideo = async ():Promise<ItemList[]> => {
  // var axios = require("axios").default;

  // var options = {
  //   method: 'GET',
  //   url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
  //   headers: {
  //     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
  //     'x-rapidapi-key': '151dd40a87msh1bd8ee1406e994cp1528c0jsna796a6e94e45'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return getUserVideo.itemList;
};

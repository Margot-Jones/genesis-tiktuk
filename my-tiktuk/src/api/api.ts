import axios from "axios";
import { default as getFeed } from "../lib/getTrendingFeed.json";
import { default as getUser } from "../lib/getUserInfo.json";
import { default as getUserVideo } from "../lib/getUserFeed.json";
import { ItemList } from "../types/video";
import { UserProp } from "../types/user";
import { PostProp } from "../types/feed";

export const instance = axios.create({
  baseURL: 'https://tiktok33.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY as string,
  },
});

export const getTrendingFeed = async (): Promise<PostProp[]> => {
  console.log('get Trending feed');

  try {
    const response = await instance.get('/trending/feed');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    console.error('error');
    return getFeed;
  }
};

export const getUserInfo = async (username: string): Promise<UserProp> => {
  try {
    const response = await instance.get(`/user/info/${username}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return getUser;
  }
};

export const getUserFeedVideo = async (username='dave.xp'): Promise<ItemList[]> => {
  // try {
  //   const response = await instance.get(`/user/feed/${username}`);
  //   console.log(response.data.itemList);
  //   return response.data.itemList;
  // } catch (error) {
  //   console.error(error);
  //   return getUserVideo.itemList;
  // }
  return getUserVideo.itemList;
};

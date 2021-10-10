import httpService from './service.http';
import {ApiRequests } from './api.endpoints'

export const getPosts =  () => httpService.get(ApiRequests.POST)
    
export const createPost =  ({image, post, userId}: any) => {
    const bodyFormData = new FormData();
    image && bodyFormData.append("image", image);
    bodyFormData.append("content", post);
    bodyFormData.append("userId", userId);
    return httpService.post(ApiRequests.POST, bodyFormData, {
      "Content-Type": "multipart/form-data",
    });
};

export const getUserByName = (name: string) => httpService.get(ApiRequests.AUTH, {}, { name })

export const sendFriendship = (toUser: {toUser: {_id: string}}) => httpService.post(ApiRequests.SEND_FRIENDSHIP, toUser)
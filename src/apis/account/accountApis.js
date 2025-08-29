import { instance } from "../utils/instance";

export const getUserInfo = async (userId) => {
  try {
    const response = await instance.get(`/account/get/${userId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

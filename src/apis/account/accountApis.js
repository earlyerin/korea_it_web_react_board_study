import { instance } from "../utils/instance";

export const getUserInfo = async (userId) => {
  try {
    const response = await instance.get(`/account/get/${userId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const changePasswordRequest = async (data) => {
  try {
    const response = await instance.post(
      "/account/change/password/authentication/user",
      data
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const changeUserNameRequest = async (data) => {
  try {
    const response = await instance.post(
      "/account/change/username/authentication/user",
      data
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const sendMailRequest = async (data) => {
  try {
    const response = await instance.post("/mail/send", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

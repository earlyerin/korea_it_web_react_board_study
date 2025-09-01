import { instance } from "../utils/instance";

export const addBoardRequest = async (data) => {
  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  try {
    const response = await instance.post("/board/add", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBoardListRequest = async () => {
  try {
    const response = await instance.get("/board/list");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBoardByUserId = async (userId) => {
  try {
    const response = await instance.get(`/board/profile/${userId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getBoardDetail = async (boardId) => {
  try {
    const response = await instance.get(`/board/${boardId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateBoard = async (data) => {
  try {
    const response = await instance.post(`/board/update`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const removeBoardByBoardId = async (boardId) => {
  try {
    const response = await instance.post(`/board/remove/${boardId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

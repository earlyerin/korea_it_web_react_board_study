import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const box = css`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;

    > img {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    > input[type="file"]::file-selector-button {
      color: #fff;
      outline: none;
      border: none;
      background-color: #1c6ea4;
      padding: 5px 10px;
      font-size: 14px;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
`;

export const input = css`
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  color: #333;
`;

export const btnBox = css`
  width: 100%;
  margin-top: 10px;

  > button {
    width: 100%;
    padding: 10px 30px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 500;
    color: white;
    background-color: #33a1e0;
    transition: all 0.1s ease;

    &:hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
`;

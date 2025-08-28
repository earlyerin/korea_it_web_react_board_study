import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const box = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  gap: 10px;

  > input {
    outline: none;
    border: none;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    color: #333;
    font-size: 20px;
  }

  > textarea {
    flex-grow: 1;
    outline: none;
    border: none;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    resize: none;
  }
`;

export const btnBox = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  > button {
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

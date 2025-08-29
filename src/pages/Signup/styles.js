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
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
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

export const errorMessageBox = css`
  display: flex;
  gap: 5px;
  color: #8e1616;
  font-size: 14px;
`;

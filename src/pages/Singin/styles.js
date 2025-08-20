import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 0px;
  box-sizing: border-box;
`;

export const box = css`
  width: 400px;
  height: 450px;
  padding: 30px;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const inputBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > input {
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    font-size: 16px;
    padding: 10px 15px;
    color: #333;
  }
`;

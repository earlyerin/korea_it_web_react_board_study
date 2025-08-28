import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-top: 150px;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 400px;
  height: 250px;
  padding: 20px;
  color: white;
  background-color: #33a1e0;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  > h2 {
    margin: 0;
    font-size: 30px;
  }

  > p {
    color: white;
    margin: 0;
    text-align: center;
    word-break: keep-all;
  }

  &:hover {
    background-color: #1c6ea4;
  }
`;

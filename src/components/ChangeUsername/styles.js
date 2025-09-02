import { css } from "@emotion/react";

export const container = css`
  position: fixed;
  width: 500px;
  height: 500px;
  top: 100px;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const box = css`
  display: flex;
  flex-direction: column;
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

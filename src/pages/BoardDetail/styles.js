import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;

export const boardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  box-sizing: border-box;
  gap: 15px;
`;

export const boardHeader = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 15px 10px;

  box-sizing: border-box;

  > h3 {
    font-size: 22px;
    margin: 0;
  }

  > dl {
    display: flex;
    margin: 0;
    font-size: 14px;

    > dt {
      color: #777777ff;
      font-weight: 500;
    }

    > dd {
      margin-left: 20px;
      color: #3f3f3fff;
    }
  }
`;

export const boardContent = css`
  width: 100%;
  min-height: 420px;
  padding: 10px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

export const btnContainer = css`
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;

  > div {
    display: flex;
    gap: 8px;
  }
`;

export const btn = (color) => css`
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  padding: 5px 15px;
  background-color: ${color};
  transition: all 0.1s ease;

  &:hover {
    opacity: 0.85;
  }
`;

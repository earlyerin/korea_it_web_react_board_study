import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0px;
  box-sizing: border-box;
`;

export const box = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: auto;
  padding: 30px 60px;
  box-sizing: border-box;
`;

export const profileBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;

  > img {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  > h3 {
    margin: 0;
  }

  > p {
    margin: 0;
    color: #777777ff;
  }
`;

export const contentBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: hidden;

  > div:first-of-type {
    font-weight: 500;
    font-size: 20px;
    background-color: #1c6ea4;
    color: white;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    > p {
      display: flex;
      align-items: center;
      line-height: 30px;
      gap: 10px;
      margin: 0;
    }

    > span {
      font-size: 14px;
      cursor: pointer;
    }

    > strong {
      cursor: pointer;
    }

    > button {
      padding: 5px 10px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      color: white;
      background-color: #33a1e0;
      transition: all 0.1s ease;

      &:hover {
        opacity: 0.85;
      }
    }
  }

  > div:last-of-type {
    border: none;
  }
`;

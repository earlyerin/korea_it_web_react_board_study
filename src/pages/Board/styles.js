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

export const searchContainer = css`
  display: flex;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;

  > input {
    flex-grow: 1;
    outline: none;
    border: none;
    padding: 10px;
    box-sizing: border-box;
  }
  > input::placeholder {
    font-size: 16px;
  }

  > div {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

export const listContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  border-bottom: 1px solid #dbdbdb;

  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    > li {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 20px;
      color: #333;
      border-bottom: 1px solid #dbdbdb;
      box-sizing: border-box;

      > strong {
        cursor: pointer;
      }
    }

    > li:last-of-type {
      border-bottom: none;
    }
  }
`;

export const paginateContainer = css`
  width: 100%;
  padding: 10px 10px 30px 0px;
  box-sizing: border-box;

  > ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    > li {
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
      color: #333;
    }

    > li:hover {
      transform: translateY(-2px);
      transition: all 0.2s ease;
    }
  }
`;

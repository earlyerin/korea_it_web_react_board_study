import { css } from "@emotion/react";

export const header = css`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      > li {
        color: #333;
        cursor: pointer;

        > a {
          color: #333;
          text-decoration: none;
        }
      }
    }
  }
`;

export const headerIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  color: #333;
`;

import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const listContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
border-bottom: 1px solid #dbdbdb;

    > li {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 5px;
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

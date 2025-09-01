/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardByUserId } from "../../apis/board/boardApis";

function MyBoard({ children }) {
  const [BoardList, setBoardList] = useState([]);

  useEffect(() => {
    getBoardByUserId(children).then((response) => {
      if (response.data.status === "success") {
        setBoardList(response.data.data);
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        return;
      }
    });
  }, [children]);

  return (
    <div css={s.container}>
      <ul css={s.listContainer}>
        <li>
          <strong>제목</strong>
          <span>날짜</span>
        </li>
        <li>
          <strong>제목</strong>
          <span>날짜</span>
        </li>
        <li>
          <strong>제목</strong>
          <span>날짜</span>
        </li>
      </ul>
    </div>
  );
}

export default MyBoard;

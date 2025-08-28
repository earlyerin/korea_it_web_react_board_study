/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useEffect, useState } from "react";
import {
  getBoardDetail,
  removeBoardByBoardId,
} from "../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function BoardDetail() {
  const { boardId } = useParams();
  const [boardData, setBoardData] = useState({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  useEffect(() => {
    getBoardDetail(boardId)
      .then((response) => {
        if (response.data.status === "success") {
          setBoardData(response.data.data);
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          navigate("/board");
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        console.log(error);
        return;
      });
  }, [boardId, navigate]);

  const removeOnClickHandler = () => {
    removeBoardByBoardId(boardId)
      .then((response) => {
        if (response.data.status === "success") {
          navigate("/board");
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          navigate("/board");
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        console.log(error);
        return;
      });
  };

  return (
    <div css={s.container}>
      <div css={s.boardContainer}>
        <div css={s.boardHeader}>
          <h3>{boardData.title}</h3>
          <dl>
            <dt>작성자</dt>
            <dd>{boardData.userName}</dd>
          </dl>
          <dl>
            <dt>작성일</dt>
            <dd>
              {boardData?.regDt
                ? new Intl.DateTimeFormat("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(boardData.regDt))
                : ""}
            </dd>
          </dl>
          <dl>
            <dt>수정일</dt>
            <dd>
              {boardData?.updDt
                ? new Intl.DateTimeFormat("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(boardData.updDt))
                : "-"}
            </dd>
          </dl>
        </div>
        <div css={s.boardContent}>{boardData.content}</div>
      </div>
      <div css={s.btnContainer}>
        <button css={s.btn("#33a1e0")} onClick={() => navigate(-1)}>
          목록
        </button>
        {principalData.data.data.userId == boardData.userId ? (
          <div>
            <button
              css={s.btn("#FFDE63")}
              onClick={() => navigate(`/board/update/${boardId}`)}
            >
              수정
            </button>
            <button css={s.btn("#EA5B6F")} onClick={removeOnClickHandler}>
              삭제
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default BoardDetail;

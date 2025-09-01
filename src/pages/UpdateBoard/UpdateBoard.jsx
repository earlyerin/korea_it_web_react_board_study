/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { getBoardDetail, updateBoard } from "../../apis/board/boardApis";
import { usePrincipalState } from "../../store/usePrincipalStore";

function UpdateBoard() {
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { principal } = usePrincipalState();

  useEffect(() => {
    getBoardDetail(boardId)
      .then((response) => {
        if (response.data.status === "success") {
          setTitle(response.data.data.title);
          setContent(response.data.data.content);
          if (principal.userId !== response.data.data.userId) {
            alert("접근 권한이 없습니다.");
            navigate("/board");
          }
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
  }, [boardId, navigate, principal ]);

  const updateBoardMutation = useMutation({
    mutationKey: "updateBoard",
    mutationFn: updateBoard,
    onSuccess: (response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
        navigate("/board");
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        if (
          response.data.message ===
          "잘못된 접근입니다. 로그인 정보가 유효하지 않거나 권한이 없습니다."
        ) {
          localStorage.removeItem("accessToken");
          window.location.href = "/auth/signin";
        }
        return;
      }
    },
    onError: (error) => {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
      console.log(error);
    },
  });

  const updateOnClickHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 && content.trim().length === 0) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    updateBoardMutation.mutate({
      boardId: boardId,
      title: title,
      content: content,
    });
  };

  return (
    <div css={s.container}>
      <form css={s.box}>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div css={s.btnBox}>
          <button onClick={updateOnClickHandler}>작성 완료</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBoard;

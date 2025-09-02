/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { addBoardRequest } from "../../apis/board/boardApis";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { principal, isLoggedIn } = usePrincipalState;

  const addBoardMutation = useMutation({
    mutationKey: "addBoard",
    mutationFn: addBoardRequest,
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

  const addOnClickHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/auth/signin");
      return;
    }

    addBoardMutation.mutate({
      title: title,
      content: content,
      userId: principal.userId,
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
          <button onClick={addOnClickHandler}>작성 완료</button>
        </div>
      </form>
    </div>
  );
}

export default Write;

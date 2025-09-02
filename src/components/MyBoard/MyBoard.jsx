/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

function MyBoard() {
  const { userId } = useParams();
  const [boardList, setBoardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const amountBoard = 10;

  useEffect(() => {
    getBoardListRequest()
      .then((response) => {
        if (response.data.status === "success") {
          const userBoardList = response.data.data.filter(
            (post) => post.userId == userId
          );

          setBoardList(userBoardList);
        } else if (response.data.status === "failed") {
          setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        console.log(error);
        return;
      });
  }, [userId]);

  useEffect(() => {
    //페이지네이션
    const offset = currentPage * amountBoard;
    const slicedBoard = boardList.slice(offset, offset + amountBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, boardList]);

  useEffect(() => {
    //스크롤 초기화
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pageOnChangeHandler = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <h1>내 게시물</h1>
        <ul>
          {!currentBoardList ? (
            <h1>{errorMessage}</h1>
          ) : (
            currentBoardList.map((post) => (
              <li key={post.boardId}>
                <strong onClick={() => navigate(`/board/${post.boardId}`)}>
                  {post.title}
                </strong>
                <span>
                  {new Intl.DateTimeFormat("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(post.regDt))}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
      <div css={s.paginateContainer}>
        {
          <ReactPaginate
            pageCount={Math.ceil(boardList.length / amountBoard)}
            onPageChange={pageOnChangeHandler}
            previousLabel="이전"
            nextLabel="다음"
          />
        }
      </div>
    </div>
  );
}

export default MyBoard;

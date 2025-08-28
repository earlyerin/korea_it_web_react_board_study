/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { LuSearch } from "react-icons/lu";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function Board() {
  const [boardList, setBoardList] = useState([]);
  const [message, setMessage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const amountBoard = 15;

  useEffect(() => {
    //API 요청
    getBoardListRequest().then((response) => {
      if (response.data.status === "success") {
        setBoardList(response.data.data);
      } else if (response.data.status === "failed") {
        setBoardList([]);
        setMessage(response.data.message);
      }
    });
  }, []);

  useEffect(() => {
    //페이지네이션
    const offset = currentPage * amountBoard;
    const slicedBoard = boardList.slice(offset, offset + amountBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, boardList]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pageOnChangeHandler = (e) => {
    setCurrentPage(e.selected);
  };

  const searchOnClickHandler = () => {};

  return (
    <div css={s.container}>
      <div css={s.searchContainer}>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div onClick={searchOnClickHandler}>
          <LuSearch />
        </div>
      </div>
      <div css={s.listContainer}>
        {boardList.length === 0 ? (
          <h1>{message}</h1>
        ) : (
          <ul>
            {currentBoardList.map((post) => (
              <li
                key={post.boardId}
                onClick={() => navigate(`/board/${post.boardId}`)}
              >
                <strong>{post.title}</strong>
                <span>
                  {new Intl.DateTimeFormat("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(post.regDt))}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div css={s.paginateContainer}>
        <ReactPaginate
          pageCount={Math.ceil(boardList.length / amountBoard)}
          onPageChange={pageOnChangeHandler}
          previousLabel="이전"
          nextLabel="다음"
        />
      </div>
    </div>
  );
}

export default Board;

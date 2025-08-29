/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { LuCheck, LuSearch } from "react-icons/lu";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

function Board() {
  const [boardList, setBoardList] = useState([]); //원본 데이터
  const [filteredList, setFilteredList] = useState([]); //필터링한 데이터
  const [searchValue, setSearchValue] = useState("");
  const [currentBoardList, setCurrentBoardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState({});

  const navigate = useNavigate();

  const amountBoard = 15;

  useEffect(() => {
    //API 요청
    getBoardListRequest().then((response) => {
      if (response.data.status === "success") {
        setBoardList(response.data.data);

        setFilteredList(response.data.data);
      } else if (response.data.status === "failed") {
        setBoardList([]);
        setFilteredList([]);
        setErrorMessage({
          message: response.data.message,
        });
      }
    });
  }, []);

  useEffect(() => {
    //페이지네이션
    const offset = currentPage * amountBoard;
    const slicedBoard = filteredList.slice(offset, offset + amountBoard);
    setCurrentBoardList(slicedBoard);
  }, [currentPage, filteredList]);

  useEffect(() => {
    //스크롤 초기화
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pageOnChangeHandler = (e) => {
    setCurrentPage(e.selected);
  };

  const searchOnClickHandler = () => {
    const keyword = searchValue.trim();
    if (keyword.length === 0) {
      setFilteredList(boardList); //검색어 없으면 전체 리스트
    } else {
      const searchList = boardList.filter((post) =>
        post.title.includes(keyword)
      );
      setFilteredList(searchList);
      if (searchList.length === 0) {
        setErrorMessage({
          message1: "단어의 철자가 정확한지 확인해 보세요.",
          message2:
            "검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.",
          message3: "두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.",
        });
      } else {
        setErrorMessage({});
      }
    }
    setCurrentPage(0); //첫 페이지로 초기화
  };

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
          <h1>{errorMessage.message}</h1>
        ) : (
          <ul>
            {!errorMessage.message1 ? (
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
            ) : (
              <div css={s.errorMessageBox}>
                <div>
                  <LuCheck />
                  <span>{errorMessage.message1}</span>
                </div>
                <div>
                  <LuCheck />
                  <span>{errorMessage.message2}</span>
                </div>
                <div>
                  <LuCheck />
                  <span>{errorMessage.message3}</span>
                </div>
              </div>
            )}
          </ul>
        )}
      </div>
      <div css={s.paginateContainer}>
        {filteredList.length !== 0 ? (
          <ReactPaginate
            pageCount={Math.ceil(filteredList.length / amountBoard)}
            onPageChange={pageOnChangeHandler}
            previousLabel="이전"
            nextLabel="다음"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Board;

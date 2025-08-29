/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { Link, useNavigate } from "react-router-dom";
import {
  LuLogIn,
  LuLogOut,
  LuUserRoundCog,
  LuUserRoundPlus,
} from "react-icons/lu";
import { useQueryClient } from "@tanstack/react-query";

function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");
    queryClient.removeQueries(["principal"]); // 캐시 비우기
    window.location.href = "/auth/signin";
  };

  return (
    <div css={s.header}>
      <div css={s.siteLogo} onClick={() => onClickNavHandler("/")}>
        <span>🗃️</span>
      </div>
      <div>
        <ul>
          <li>
            {" "}
            <Link to={"/board"}>📑게시판</Link>
          </li>
          <li>
            <Link to={"/write"}>✒️글쓰기</Link>
          </li>
        </ul>
      </div>
      <div>
        {principalData ? (
          <ul>
            <li
              css={s.headerIcon}
              onClick={() =>
                onClickNavHandler(
                  `/account/profile/${principalData.data.data.userId}`
                )
              }
            >
              <LuUserRoundCog />
            </li>
            <li css={s.headerIcon} onClick={onClickSignout}>
              <LuLogOut />
            </li>
          </ul>
        ) : (
          <ul>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signin")}
            >
              <LuLogIn />
            </li>
            <li
              css={s.headerIcon}
              onClick={() => onClickNavHandler("/auth/signup")}
            >
              <LuUserRoundPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;

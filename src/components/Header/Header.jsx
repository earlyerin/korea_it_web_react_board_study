/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { Link, useNavigate } from "react-router-dom";
import {
  LuLogIn,
  LuLogOut,
  LuUserRoundCog,
  LuUserRoundPlus,
} from "react-icons/lu";
import { usePrincipalState } from "../../store/usePrincipalStore";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, principal, logout } = usePrincipalState();

  const onClickNavHandler = (path) => {
    navigate(path);
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
        {isLoggedIn ? (
          <ul>
            <li
              css={s.headerIcon}
              onClick={() =>
                onClickNavHandler(`/account/profile/${principal?.userId}`)
              }
            >
              <LuUserRoundCog />
            </li>
            <li css={s.headerIcon} onClick={() => logout()}>
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

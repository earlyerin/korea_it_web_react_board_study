/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useEffect, useState } from "react";
import {
  LuCalendarArrowDown,
  LuLockKeyhole,
  LuMail,
  LuPencil,
  LuShield,
  LuUserRound,
} from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo, sendMailRequest } from "../../apis/account/accountApis";
import { getBoardListRequest } from "../../apis/board/boardApis";
import { usePrincipalState } from "../../store/usePrincipalStore";
import { PiSealCheckFill } from "react-icons/pi";

function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const { userId } = useParams();
  const { principal } = usePrincipalState();
  const [boardList, setBoardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getBoardListRequest()
      .then((response) => {
        if (response.data.status === "success") {
          const userBoardList = response.data.data
            .filter((post) => post.userId == userId)
            .slice(0, 4);

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
    getUserInfo(userId)
      .then((response) => {
        if (response.data.status === "success") {
          const userData = response.data.data;
          setUserInfo({
            name: userData.userName,
            email: userData.userEmail,
            img: userData.profileImg,
            regDt: userData.regDt,
            updDt: userData.updDt,
            roles: userData.userRoles,
          });
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          localStorage.removeItem("accessToken");
          navigate("/auth/signin");
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        console.log(error);
        return;
      });
  }, [userId, navigate]);

  const onClickVerifyhandler = () => {
    sendMailRequest({
      userEmail: principal.userEmail,
    }).then((response) => {
      if (response.data.status === "success") {
        alert(response.data.message);
      } else if (response.data.status === "failed") {
        alert(response.data.message);
      }
    });
  };

  return (
    <div css={s.container}>
      <div css={s.box}>
        <div css={s.profileBox}>
          <div>
            <img src={userInfo?.img} alt="userImg" />
            <span onClick={() => navigate("/account/profile/changeProfileImg")}>
              <LuPencil />
            </span>
          </div>
          <div>
            <h3>{userInfo?.name}</h3>
            <p>{userInfo?.email}</p>
          </div>
        </div>
        <div css={s.contentBox}>
          <div>
            내게시물
            <span
              onClick={() => navigate(`/account/profile/myboard/${userId}`)}
            >
              모두 보기
            </span>
          </div>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            boardList.map((post) => (
              <div key={post.boardId}>
                <strong onClick={() => navigate(`/board/${post.boardId}`)}>
                  {post.title}
                </strong>
                <p>
                  {new Intl.DateTimeFormat("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(post.regDt))}
                </p>
              </div>
            ))
          )}
        </div>
        <div css={s.contentBox}>
          <div>내프로필</div>
          <div>
            <p>
              <LuUserRound />
              {userInfo?.name}
            </p>
            <button onClick={() => navigate("/account/profile/changeUsername")}>
              수정
            </button>
          </div>
          <div>
            <p>
              <LuMail />
              {userInfo?.email}
            </p>
          </div>
          {userInfo.roles
            ? userInfo.roles.map((userRole) => {
                return (
                  <div key={userRole.userRoleId}>
                    <p>
                      <LuShield />
                      {userRole.role.roleNameKor}
                    </p>
                    {userRole.roleId === 3 ? (
                      <button onClick={onClickVerifyhandler}>인증</button>
                    ) : null}
                  </div>
                );
              })
            : ""}
          <div>
            <p>
              <LuCalendarArrowDown />
              {userInfo?.regDt
                ? new Intl.DateTimeFormat("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(userInfo.regDt))
                : undefined}
            </p>
          </div>
        </div>
        <div css={s.contentBox}>
          <div>보안설정</div>
          <div>
            <p>
              <LuLockKeyhole />
              비밀번호
            </p>
            <button onClick={() => navigate("/account/profile/changePassword")}>
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

/** @jsxImportSource @emotion/react */
import { SiNaver } from "react-icons/si";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signinRequest } from "../../apis/auth/authApis";

function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signinOnClickHandler = () => {
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("모든 항목을 입력해주세요");
      return;
    } else {
      //로그인 API 요청 보내기
      signinRequest({
        userName: username,
        password: password,
      })
        .then((response) => {
          if (response.data.status === "success") {
            alert(response.data.message);
            window.location.href = "/"; //새로고침과 동시에 페이지 교체(헤더 컴포넌트 적용을 위해)
            localStorage.setItem("accessToken", response.data.data);
          } else if (response.data.status === "failed") {
            alert(response.data.message);
            return;
          }
        })
        .catch((error) => {
          alert("문제가 발생했습니다. 다시 시도해주세요.");
          console.log(error);
          return;
        });
    }
  };

  const signupOnClickHandler = () => {
    navigate("/auth/signup");
  };
  return (
    <div css={s.container}>
      <h1>로그인</h1>
      <div css={s.box}>
        <div css={s.inputBox}>
          <AuthInput
            type="text"
            placeholder="아이디"
            state={username}
            setState={setUsername}
          />
          <AuthInput
            type="password"
            placeholder="비밀번호"
            state={password}
            setState={setPassword}
          />
        </div>
        <div css={s.authBtnBox}>
          <button
            style={{ backgroundColor: "#33A1E0" }}
            onClick={signinOnClickHandler}
          >
            로그인
          </button>
          <button
            style={{ backgroundColor: "#33A1E0" }}
            onClick={signupOnClickHandler}
          >
            회원가입
          </button>
        </div>
        <div css={s.oauthBtnBox}>
          <a
            href="http://localhost:8080/oauth2/authorization/google"
            style={{
              backgroundColor: "white",
              border: "1px solid #ddd",
              color: "black",
            }}
          >
            <FcGoogle css={s.oauthIcon} size={20} />
            <span>Google 로그인</span>
          </a>
          <a
            href="http://localhost:8080/oauth2/authorization/naver"
            style={{ backgroundColor: "#03c75a", color: "white" }}
          >
            <SiNaver css={s.oauthIcon} style={{ top: "13px", left: "23px" }} />
            <span>네이버 로그인</span>
          </a>
          <a
            href="http://localhost:8080/oauth2/authorization/kakao"
            style={{ backgroundColor: "#fee500", color: "black" }}
          >
            <RiKakaoTalkFill css={s.oauthIcon} size={20} />
            <span>카카오 로그인</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signin;

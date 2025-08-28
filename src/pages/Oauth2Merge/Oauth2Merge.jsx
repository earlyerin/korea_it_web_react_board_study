/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import AuthInput from "../../components/AuthInput/AuthInput";
import { oauth2MergeRequest } from "../../apis/auth/authApis";

function Oauth2Merge() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const mergeOnClickHandler = () => {
    if (username.trim().length === 0 && password.trim().length === 0) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    //회원가입 API 요청
    oauth2MergeRequest({
      userName: username,
      password: password,
      provider: searchParam.get("provider"),
      providerUserId: searchParam.get("providerUserId"),
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          navigate("/auth/signin"); //연동 후 로그인 페이지로 이동
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          if (response.data.message === "사용자 정보를 확인하세요.") {
            setUserName("");
            setPassword("");
          } else if (
            response.data.message ===
            "해당 계정은 이미 소셜 계정과 연동되어있습니다."
          ) {
            navigate("/auth/signin");
          }
          return;
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        console.log(error);
        return;
      });
  };

  useEffect(() => {
    const newErrorMessage = {};

    if (password.length > 0) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,20}$/;
      if (!passwordRegex.test(password)) {
        newErrorMessage.password =
          "8~20자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
      }
    }

    setErrorMessage(newErrorMessage);
  }, [password]);

  return (
    <div css={s.container}>
      <h1>계정 연동</h1>
      <div css={s.box}>
        <AuthInput
          type="text"
          placeholder="아이디"
          state={username}
          setState={setUserName}
        />
        <AuthInput
          type="password"
          placeholder="비밀번호"
          state={password}
          setState={setPassword}
        />
        {errorMessage.password ? (
          <div css={s.errorMessage}>
            <IoIosWarning />
            <span>{errorMessage.password}</span>
          </div>
        ) : (
          <></>
        )}
        <div css={s.btnBox}>
          <button onClick={mergeOnClickHandler}>연동하기</button>
        </div>
      </div>
    </div>
  );
}

export default Oauth2Merge;

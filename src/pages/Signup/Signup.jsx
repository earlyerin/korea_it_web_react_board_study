/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { IoIosWarning } from "react-icons/io";
import { signupRequest } from "../../apis/auth/authApis";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();

  const signupOnClickHandler = () => {
    if (
      username.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    if (confirmPassword !== password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    //회원가입 API 요청
    signupRequest({
      userName: username,
      password: password,
      userEmail: email,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          navigate("/auth/signin"); //회원가입 성공 후 로그인 페이지로 이동
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          if (response.data.message === "이미 사용중인 아이디입니다.") {
            setUserName("");
          } else if (response.data.message === "이미 가입된 이메일입니다.") {
            setEmail("");
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

    if (email.length > 0) {
      const emailRex =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!emailRex.test(email)) {
        newErrorMessage.email = "이메일 형식에 맞게 입력해주세요";
      }
    }

    setErrorMessage(newErrorMessage);
  }, [password, email]);

  return (
    <div css={s.container}>
      <h1>회원가입</h1>
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
          <div css={s.errorMessageBox}>
            <IoIosWarning />
            <span>{errorMessage.password}</span>
          </div>
        ) : (
          <></>
        )}
        <AuthInput
          type={"password"}
          placeholder={"비밀번호 확인"}
          state={confirmPassword}
          setState={setConfirmPassword}
        />
        <AuthInput
          type={"email"}
          placeholder={"이메일"}
          state={email}
          setState={setEmail}
        />

        {errorMessage.email ? (
          <div css={s.errorMessageBox}>
            <IoIosWarning />
            <span>{errorMessage.email}</span>
          </div>
        ) : (
          <></>
        )}

        <div css={s.btnBox}>
          <button onClick={signupOnClickHandler}>가입하기</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;

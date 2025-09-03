/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import AuthInput from "../../components/AuthInput/AuthInput";
import { useEffect, useState } from "react";
import { usePrincipalState } from "../../store/usePrincipalStore";
import { changePasswordRequest } from "../../apis/account/accountApis";
import { IoIosWarning } from "react-icons/io";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const { principal, logout } = usePrincipalState();

  const changeOnClickHandler = () => {
    if (
      password.trim().length === 0 ||
      newPassword.trim().length === 0 ||
      newPasswordConfirm.trim().length === 0
    ) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    changePasswordRequest({
      userId: principal.userId,
      oldPassword: password,
      newPassword: newPassword,
      checkPassword: newPasswordConfirm,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          logout();
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          setPassword("");
          setNewPassword("");
          setNewPasswordConfirm("");
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

    if (newPassword.length > 0) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,20}$/;
      if (!passwordRegex.test(newPassword)) {
        newErrorMessage.password =
          "8~20자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
      }
    }
    setErrorMessage(newErrorMessage);
  }, [newPassword]);

  return (
    <div css={s.container}>
      <div css={s.box}>
        <h1>비밀번호 변경</h1>
        <AuthInput
          type={"password"}
          placeholder={"현재 비밀번호"}
          state={password}
          setState={setPassword}
        />
        <AuthInput
          type={"password"}
          placeholder={"새 비밀번호"}
          state={newPassword}
          setState={setNewPassword}
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
          placeholder={"새 비밀번호 확인"}
          state={newPasswordConfirm}
          setState={setNewPasswordConfirm}
        />
        <div css={s.btnBox}>
          <button onClick={changeOnClickHandler}>변경하기</button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;

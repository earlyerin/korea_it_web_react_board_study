/** @jsxImportSource @emotion/react */
import { useState } from "react";
import AuthInput from "../AuthInput/AuthInput";
import * as s from "./styles";
import { changeUserNameRequest } from "../../apis/account/accountApis";
import { usePrincipalState } from "../../store/usePrincipalStore";

function ChangeUsername() {
  const [userName, setUserName] = useState("");
  const { principal, logout } = usePrincipalState();

  const changeOnClickHandler = () => {
    if (userName.trim().length === 0) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    changeUserNameRequest({
      userId: principal.userId,
      userName: userName,
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          logout();
        } else if (response.data.status === "failed") {
          alert(response.data.message);
          setUserName("");
        }
      })
      .catch((error) => {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
        console.log(error);
        return;
      });
  };
  return (
    <div css={s.container}>
      <div css={s.box}>
        <h1>아이디 변경</h1>
        <AuthInput
          type={"text"}
          placeholder={"새로운 아이디를 입력하세요."}
          state={userName}
          setState={setUserName}
        />
        <div css={s.btnBox}>
          <button onClick={changeOnClickHandler}>변경하기</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeUsername;

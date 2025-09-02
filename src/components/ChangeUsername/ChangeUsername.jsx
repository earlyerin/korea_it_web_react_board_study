/** @jsxImportSource @emotion/react */
import { useState } from "react";
import AuthInput from "../AuthInput/AuthInput";
import * as s from "./styles";

function ChangeUsername() {
  const [userName, setUserName] = useState("");

  return (
    <div css={s.container}>
      <div css={s.box}>
        <h2>아이디 변경</h2>
        <AuthInput
          type={"text"}
          placeholder={"새로운 아이디를 입력하세요."}
          state={userName}
          setState={setUserName}
        />
        <div css={s.btnBox}>
          <button>변경하기</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeUsername;

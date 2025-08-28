/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./styles";
import { useEffect } from "react";

function Oauth2Signin() {
  const [searchParam] = useSearchParams();

  useEffect(() => {
    localStorage.setItem("accessToken", searchParam.get("accessToken"));
    window.location.href = "/";
  }, [searchParam]);
  return <></>;
}

export default Oauth2Signin;

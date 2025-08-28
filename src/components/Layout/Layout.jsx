/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import Header from "../Header/Header";
import * as s from "./styles";

function Layout({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  //구조분해(요청한 데이터, 로딩상태, 에러, 재시도횟수)
  const { data, isLoading } = useQuery({
    queryKey: ["getPrincipal"], //요청키
    queryFn: getPrincipalRequest, //함수
    refetch: 1, //재시도 제한
    enabled: !!accessToken,
  });
  return (
    <div css={s.layout}>
      {isLoading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <Header />
          <div css={s.mainContainer}>{children}</div>
        </>
      )}
    </div>
  );
}

export default Layout;

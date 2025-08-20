/** @jsxImportSource @emotion/react */
import Header from "../Header/Header";
import * as s from "./styles";

function Layout({ children }) {
  return (
    <div css={s.layout}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;

import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/Singin/Signin";
import Signup from "../../pages/Signup/Signup";
import OAuth2 from "../../pages/Oauth2/OAuth2";
import Oauth2Signup from "../../pages/Oauth2Signup/Oauth2Signup";
import Oauth2Merge from "../../pages/Oauth2Merge/Oauth2Merge";
import Oauth2Signin from "../../pages/Oauth2Signin/Oauth2Signin";

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth2" element={<OAuth2 />} />
        <Route path="/oauth2/signup" element={<Oauth2Signup />} />
        <Route path="/oauth2/merge" element={<Oauth2Merge />} />
        <Route path="/oauth2/signin" element={<Oauth2Signin />} />
      </Routes>
    </>
  );
}

export default AuthRouter;

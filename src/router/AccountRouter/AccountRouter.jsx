import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import MyBoard from "../../components/MyBoard/MyBoard";
import ChangeUsername from "../../components/ChangeUsername/ChangeUsername";
import ChangeProfileImg from "../../components/ChangeProfileImg/ChangeProfileImg";

function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/changePassword" element={<ChangePassword />} />
        <Route path="/profile/myboard/:userId" element={<MyBoard />} />
        <Route path="/profile/changeUsername" element={<ChangeUsername />} />
        <Route path="/profile/changeProfileImg" element={<ChangeProfileImg />}/>
      </Routes>
    </>
  );
}

export default AccountRouter;

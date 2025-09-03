import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import MyBoard from "../../components/MyBoard/MyBoard";
import ChangeUsername from "../../components/ChangeUsername/ChangeUsername";

function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/changePassword" element={<ChangePassword />} />
        <Route path="/profile/myboard/:userId" element={<MyBoard />} />
        <Route path="/profile/changeUsername" element={<ChangeUsername />} />
      </Routes>
    </>
  );
}

export default AccountRouter;

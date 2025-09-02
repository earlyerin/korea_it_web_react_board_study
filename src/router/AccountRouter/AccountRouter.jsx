import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import MyBoard from "../../components/MyBoard/MyBoard";

function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/changePassword" element={<ChangePassword />} />
        <Route path="/profile/myboard/:userId" element={<MyBoard />} />
      </Routes>
    </>
  );
}

export default AccountRouter;

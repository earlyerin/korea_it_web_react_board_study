import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile/changePassword" element={<ChangePassword />}/>
      </Routes>
    </>
  );
}

export default AccountRouter;

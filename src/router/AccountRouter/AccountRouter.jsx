import { Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";

function AccountRouter() {
  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </>
  );
}

export default AccountRouter;

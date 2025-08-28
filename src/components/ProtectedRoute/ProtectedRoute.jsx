import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  if (principalData === undefined) {
    alert("로그인이 필요합니다.");
    window.location.href = "/auth/signin";
    return;
  }

  return children;
}

export default ProtectedRoute;

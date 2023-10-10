import { useLocation } from "react-router-dom";

export const useLucationPathName = () => {
  const location = useLocation();
  const hookName = location.pathname.split("/")[1];
  return hookName;
};

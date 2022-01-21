import LoginForm from "../components/Login/LoginForm";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";

const color1 = "#e03131";
const color2 = "#fa5252";
const color3 = "#ffa8a8";

const LoginPage = () => {
  const location = useLocation();
  const favicon = document.getElementById("favicon");

  if (location.pathname === "/auth") {
    document.title = "PomoChampion";
    favicon.href = "favIcon.png";
  }

  return (
    <Layout color1={color1} color2={color2} color3={color3}>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;

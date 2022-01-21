import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Layout/Header/Header";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import PomodoroPage from "./pages/PomodoroPage";
import PomodoroShortPage from "./pages/PomodoroShortPage";
import PomodoroLongPage from "./pages/PomodroLongPage";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [logIn, setLogin] = useState(true);
  const dispatch = useDispatch();
  const authName = useSelector((state) => state.auth.isAuth);
  const location = useLocation();

  useEffect(() => {
    dispatch(authActions.checkLogin());
    if (!authName) {
      setLogin(false);
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      {!authName && !logIn && (
        <Switch>
          <Route path="/auth">
            <LoginPage />
          </Route>
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      )}
      {authName && (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/short">
              <PomodoroShortPage />
            </Route>
            <Route path="/long">
              <PomodoroLongPage />
            </Route>
            <Route path="/" exact>
              <PomodoroPage />
            </Route>
            <Route path="*">
              <Redirect to="/" exact />
            </Route>
          </Switch>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;

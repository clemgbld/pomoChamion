import { useState, Suspense, lazy } from "react";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Layout/Header/Header";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import Loader from "./components/Loading/Loader";

const PomodoroPage = lazy(() => import("./pages/PomodoroPage"));
const PomodoroShortPage = lazy(() => import("./pages/PomodoroShortPage"));
const PomodoroLongPage = lazy(() => import("./pages/PomodroLongPage"));

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
  }, [dispatch, authName]);

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
        <Switch location={location} key={location.key}>
          <Route path="/short">
            <Suspense fallback={<Loader />}>
              <PomodoroShortPage />
            </Suspense>
          </Route>
          <Route path="/long">
            <Suspense fallback={<Loader />}>
              <PomodoroLongPage />
            </Suspense>
          </Route>
          <Route path="/" exact>
            <Suspense fallback={<Loader />}>
              <PomodoroPage />
            </Suspense>
          </Route>
          <Route path="*">
            <Redirect to="/" exact />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;

import { useState } from "react";
import classes from "./Header.module.css";
import MainLogo from "./MainLogo";
import { useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import { settingsActions } from "../../../store/settings";
import { SignOutWithGoogle } from "../../../Firebase/firebase";
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import Modal from "../../Modal/Modal";
import InfoContainer from "../../Info/InfoContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authName = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  const signOutHandler = () => {
    SignOutWithGoogle();
    dispatch(settingsActions.resetSettings());
    dispatch(authActions.logout());
  };

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <Modal isOpen={isOpen} onClose={closeModalHandler}>
        <InfoContainer />
      </Modal>
      <ul className={classes.container}>
        {authName && (
          <>
            <li>
              <MainLogo />
            </li>

            <div className={classes["button-container"]}>
              <li>
                <Button
                  onClickButton={openModalHandler}
                  textButton="Info"
                  iconName="information-circle-outline"
                  right="15rem"
                />
              </li>
              <li>
                <Button
                  onClickButton={signOutHandler}
                  textButton="Logout"
                  iconName="log-out-outline"
                  right="5rem"
                />
              </li>
            </div>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;

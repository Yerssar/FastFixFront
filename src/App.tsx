
import { useEffect } from "react";
import Background from "./components/Background/Background";
import { Header } from "./sections/Landing/Header/Header";
import { Landing } from "./sections/Landing/Landing";
import SectionMap from "./sections/SectionMap/SectionMap";
import SectionProfile from "./sections/SectionProflile/SectionProfile";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { authSliceActions, authSliceSlectors } from "./store/redux/authSlice/authSlice";

const App = () => {
  const isAuthenticated = useAppSelector(authSliceSlectors.selectIsAuthenticated);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(authSliceActions.currentUser());
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <Background />
    </>
  );
};

export default App;

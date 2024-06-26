import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { userAreaVisibilitySliceActions, userAreaVisibilitySliceSelectors } from "../../../store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice";
import Button from "../../../components/Button/Button";
import {
  HeaderComponent,
  HeaderComponentContainer,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderMotto,
  HeaderText,
  HeaderWpapper,
  NavMenu,
  NavMenuButtonContainer,
  SeparationLine,
  BackToTopButton,
} from "./styles";
import { up } from "../../../assets";

export const Header = () => {
  const dispatch = useAppDispatch();
  const visibilityState = useAppSelector(userAreaVisibilitySliceSelectors.loginVisibilityState);

  const [showBackToTop, setShowBackToTop] = useState(false);

  const changeVisibility = () => {
    if (visibilityState.isVisible) {
      dispatch(userAreaVisibilitySliceActions.makeFormsInvisible());
    } else {
      dispatch(userAreaVisibilitySliceActions.makeFormsVisible());
    }
  };

  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const header: any = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY;
    setShowBackToTop(scrollPosition > headerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWpapper>
      <HeaderComponent>
        <HeaderComponentContainer>
          <HeaderMotto>One Very nice the moto about service</HeaderMotto>
          <NavMenu>
            <NavMenuButtonContainer>
              <HeaderText onClick={() => scrollToSection("section-map")}>MAP</HeaderText>
              <HeaderText onClick={() => scrollToSection("section-profile")}>USER AREA</HeaderText>
              <Button onButtonClick={changeVisibility} name="LOGIN" />
            </NavMenuButtonContainer>
          </NavMenu>
        </HeaderComponentContainer>
      </HeaderComponent>
      <SeparationLine>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>
      </SeparationLine>
      {showBackToTop && <BackToTopButton onClick={scrollToTop} src={up} />}
    </HeaderWpapper>
  );
};

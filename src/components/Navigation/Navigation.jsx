import styled from 'styled-components';
import {
  logo,
  IconMoonSvg,
  FontSelection,
  ToggleTheme,
} from '../../ExportComponents';

const Navigation = ({ setCurrentMode }) => {
  return (
    <StyledNavigation>
      <div className="navbar__logo">
        <img src={logo} alt="dictionary logo" />
      </div>
      <StyledNavigationLeft>
        <FontSelection />
        <ToggleTheme setCurrentMode={setCurrentMode} />
        <IconMoonSvg />
      </StyledNavigationLeft>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: max(70px, 10vh);

  @media screen and (min-width: 768px) {
    padding: 3.625rem 0 2.125rem;
  }
`;

const StyledNavigationLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 208px;
`;

export default Navigation;

import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const ToggleMode = () => {
  const { setTheme } = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ToggleBtn
      className="center"
      title="Toggle theme"
      aria-label="toggle theme"
    >
      <input type="checkbox" id="switch" />
      <label htmlFor="switch" onClick={toggleThemeHandler}></label>
    </ToggleBtn>
  );
};

const ToggleBtn = styled.button`
  background-color: transparent;
  border: 0;
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: var(--clr-toggle-btn);
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    background: var(--clr-white);
    border-radius: 50%;
    transition: 0.3s;
  }

  input:checked + label {
    background-color: var(--clr-primary);
  }

  input:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 16px;
  }
`;

export default ToggleMode;
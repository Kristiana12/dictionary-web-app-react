import styled from 'styled-components';
import { useState, useContext } from 'react';
import { iconArrowDown } from '../../ExportComponents';
import { FontContext } from '../context/font-context';

const FontSelection = () => {
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const { font, setFont } = useContext(FontContext);

  const showOptionsHandler = () => {
    setIsOptionsShown((prevState) => !prevState);
  };

  const selectFontHandler = (e) => {
    setFont(e.target.dataset.option);
    setIsOptionsShown(false);
  };

  return (
    <StyledOptionsContainer>
      <div
        className="option--selected"
        title="Change Font"
        onClick={showOptionsHandler}
        id="dropdown"
        aria-controls="getOption"
        aria-expanded={isOptionsShown}
        aria-label="Change Font"
        aria-haspopup="listbox"
      >
        <label htmlFor="dropdown">{font}</label>
        <button>
          <img src={iconArrowDown} />
        </button>
      </div>
      <div
        className={`options ${isOptionsShown ? 'show' : ''}`}
        aria-labelledby="getOption"
      >
        <div
          className="option"
          role="option"
          tabIndex={0}
          onClick={selectFontHandler}
          data-option="Serif"
        >
          Serif
        </div>
        <div
          className="option"
          role="option"
          tabIndex={0}
          onClick={selectFontHandler}
          data-option="Sans Serif"
        >
          Sans Serif
        </div>
        <div
          className="option"
          role="option"
          tabIndex={0}
          onClick={selectFontHandler}
          data-option="Mono"
        >
          Mono
        </div>
      </div>
    </StyledOptionsContainer>
  );
};

const StyledOptionsContainer = styled.div`
  position: relative;

  .option--selected {
    min-width: 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .option--selected > label {
    font-weight: bold;
    cursor: pointer;
    padding-right: 0.5rem;
  }

  .options {
    position: absolute;
    z-index: 100;
    top: calc(100% + 10px);
    left: -1rem;
    min-width: 140px;
    border-radius: 10px;
    box-shadow: 0px 2px 25px 5px var(--clr-box-shadow);
    overflow: hidden;
    padding: 0.75rem 0;
    background-color: var(--clr-background-options);

    opacity: 0;
    transform: scaleY(0);
    visibility: hidden;
    transform-origin: top;
    transition: transform 0.4s, opacity 0.4s, visibility 0.4s;

    &.show {
      opacity: 1;
      transform: scaleY(1);
      visibility: visible;
    }
    .option {
      cursor: pointer;
      padding: 0.3rem 1rem;
      transition: color 0.4s;

      &:hover {
        color: var(--clr-primary);
      }
    }
  }
`;

export default FontSelection;

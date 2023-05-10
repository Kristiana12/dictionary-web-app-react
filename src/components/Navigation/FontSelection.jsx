import styled from 'styled-components';
import { useState, useContext, useRef, useEffect } from 'react';
import { iconArrowDown } from '../../ExportComponents';
import { FontContext } from '../context/font-context';

const FontSelection = () => {
  const [open, setOpen] = useState(false);
  const { font, setFont } = useContext(FontContext);
  const optionsRef = useRef(null);

  const toggleHandler = () => {
    setOpen((prevState) => !prevState);
  };

  //Close Menu when clicked outside
  useEffect(() => {
    let closeOptions = (e) => {
      if (!optionsRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener('click', closeOptions, true);
  }, []);

  const selectFontHandler = (e) => {
    setFont(e.target.dataset.option);
    setOpen(false);
  };

  return (
    <StyledOptionsContainer>
      <div
        ref={optionsRef}
        className="option--selected"
        title="Show font options"
        onClick={toggleHandler}
        id="dropdown"
      >
        <span>{font}</span>
        <button aria-label="Show font options">
          <img
            src={iconArrowDown}
            alt="show font options"
            aria-expanded={open}
            aria-label="Show font options"
            aria-haspopup="listbox"
          />
        </button>
      </div>
      <div className={`options ${open ? 'show' : ''}`} role="listbox">
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
    justify-content: space-around;
    cursor: pointer;
  }

  .option--selected {
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

import styled from 'styled-components';
import { iconSearch } from '../../ExportComponents';
import { useState, useRef } from 'react';

const SearchInput = ({ setUserInput }) => {
  const [hasErrorMessage, setHasErrorMessage] = useState(false);
  const inputRef = useRef();

  const inputChangeHandler = () => {
    if (inputRef.current.value.length > 0) setHasErrorMessage(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length <= 0) {
      setHasErrorMessage(true);
      // return;
    }

    //Pass data to parent
    setUserInput(inputRef.current.value);
  };

  return (
    <>
      <StyledSearch onSubmit={submitHandler}>
        <input
          className={hasErrorMessage ? 'error' : ''}
          ref={inputRef}
          type="search"
          name="search"
          id="search"
          placeholder="Search for any word..."
          onChange={inputChangeHandler}
        />
        <StyledSearchButton type="submit">
          <img
            src={iconSearch}
            alt="Search"
            aria-label="Search"
            title="Search"
          />
        </StyledSearchButton>
      </StyledSearch>
      {hasErrorMessage && (
        <p className="error-message">Whoops, can’t be empty…</p>
      )}
    </>
  );
};

const StyledSearch = styled.form`
  display: flex;
  margin-top: 1rem;
  position: relative;

  input[type='search'] {
    flex: 1;
    display: block;
    background-color: var(--clr-background-search);
    border-radius: 16px;
    padding: 1.1rem 1.5rem;
    font-weight: bold;

    &::placeholder {
      color: var(--clr-placeholder-search);
      opacity: 0.35;
    }

    &:focus,
    &:hover {
      outline: 1px solid var(--clr-primary);
    }
  }

  input[type='search'].error {
    outline: 1px solid var(--clr-error);
  }
`;

const StyledSearchButton = styled.button`
  position: absolute;
  right: 1px;
  top: 50%;
  height: 100%;
  transform: translateY(-50%);
  background-color: var(--clr-background-search);
  border-radius: 0 16px 16px 0;
  padding: 0 1.5rem;
  z-index: 10;
`;

export default SearchInput;

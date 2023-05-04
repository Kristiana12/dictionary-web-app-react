import { useState, useEffect } from 'react';
import { SearchInput, SearchResults } from '../../ExportComponents';
import axios from 'axios';
import styled from 'styled-components';

const Search = () => {
  const [userInput, setUserInput] = useState('keyboard');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  let content;

  //Fetching Data
  useEffect(() => {
    if (!userInput) {
      setHasError(true);
    }

    const fetchData = async () => {
      try {
        setHasError(false);
        setIsLoading(true);

        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
        );

        if (response.status !== 200) {
          setHasError(true);
          throw new Error('Something went wrong!');
        }

        const result = response.data;
        setData(result[0]);
      } catch (error) {
        setIsLoading(true);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userInput]);

  if (isLoading) {
    content = (
      <StyledSpinner>
        <span className="loader"></span>
      </StyledSpinner>
    );
  } else if (!isLoading && !hasError && userInput) {
    content = <SearchResults data={data} />;
  } else if (hasError && !userInput && !isLoading) {
    content = <section></section>;
    //to disable the next expression from runnning
    setHasError(false);
  } else if (hasError && userInput && !isLoading) {
    content = (
      <StyledError>
        <p className="emoji">🙁</p>
        <h1>No definitions found</h1>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </StyledError>
    );
  }

  return (
    <section>
      <SearchInput setUserInput={setUserInput} />
      {content}
    </section>
  );
};

const StyledSpinner = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 48px;
    height: 48px;
    border: 3px solid var(--clr-line);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: var(--clr-primary);
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledError = styled.section`
  text-align: center;
  padding: 4rem 0;

  .emoji {
    font-size: var(--fz-xl);
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;

export default Search;

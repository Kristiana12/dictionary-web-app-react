import styled from 'styled-components';
import { iconNewWindow } from '../../ExportComponents';
import { v4 as uuidv4 } from 'uuid';

const SearchResults = ({ data }) => {
  const playAudioOnClick = () => {
    //find the one with a valid audio
    const audioUrl = data.phonetics.filter(
      (phonetic) => phonetic.audio.length > 0
    );

    const audio = new Audio();
    audio.src = audioUrl[0].audio;
    audio.play();
  };

  const headerContent = (
    <StyledHeader>
      <div className="search-results--left">
        <h1>{data.word}</h1>
        <span className="colorized">{data?.phonetics[1]?.text}</span>
      </div>
      <div className="search-results--right">
        <button
          onClick={playAudioOnClick}
          aria-label="play audio"
          title="Play Audio"
        >
          <svg
            className="circle"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
    </StyledHeader>
  );

  const mainContent = data.meanings.map((meaning) => {
    return (
      <StyledMain key={uuidv4()}>
        <div className="heading">
          <h2>{meaning.partOfSpeech}</h2>
          <span className="line"></span>
        </div>
        <div className="body">
          <h3>Meaning</h3>
          <StyledList>
            {meaning.definitions.map((def) => (
              <li key={uuidv4()}>
                {def.definition}
                {/* Only if there is an example show */}
                {def.example && <p className="example">“{def.example}”</p>}
              </li>
            ))}
          </StyledList>
        </div>
        {/* Only if there is a synonym show */}
        {meaning.synonyms.length > 0 && (
          <h3>
            Synonyms
            <span className="colorized bold">
              {meaning?.synonyms.join(', ')}
            </span>
          </h3>
        )}
      </StyledMain>
    );
  });

  return (
    <>
      {headerContent}
      {mainContent}

      <hr />
      <StyledFooter
        style={{
          alignItems: `${data.sourceUrls.length > 1 ? 'start' : 'center'}`,
        }}
      >
        <h3>Source</h3>
        <div className="source-url">
          {data.sourceUrls.map((source) => (
            <a
              key={uuidv4()}
              className="link"
              href="https://en.wiktionary.org/wiki/keyboard"
              target="_blank"
            >
              {' '}
              {source}{' '}
            </a>
          ))}
        </div>
        <button title="view source">
          <img src={iconNewWindow} alt="view source" />
        </button>
      </StyledFooter>
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto 2rem;

  .search-results--left h1 {
    margin-bottom: 0.5rem;

    &:first-child {
      margin-top: 2.2rem;
    }
  }

  @media screen and (min-width: 678px) {
    .search-results--left span {
      font-size: var(--fz-desk-s);
    }
  }

  .search-results--right {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      transition: transform 0.4s;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(1);
      }

      //SVG
      .circle {
        width: 48px;
        height: 48px;

        circle,
        path {
          transition: all 0.4s;
        }

        &:hover circle {
          opacity: 1;
        }

        &:hover path {
          fill: var(--clr-white);
        }

        @media screen and (min-width: 678px) {
          width: 75px;
          height: 75px;
        }
      }
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const StyledMain = styled.div`
  margin-bottom: 2.5rem;
  .heading {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .body {
    margin-top: 2.68rem;
  }

  h3 {
    &:hover span {
      text-decoration: underline;
      cursor: pointer;
    }

    & > span {
      margin-left: 2.5rem;
    }
  }
`;

const StyledList = styled.ul`
  margin: 1.68rem 0 2.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: -20px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--clr-primary);
    }
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.08rem 0 7rem;

  @media screen and (min-width: 678px) {
    align-items: center;
    flex-wrap: nowrap;
  }

  h3 {
    font-size: var(--fz-xs);
  }

  .source-url {
    @media screen and (min-width: 678px) {
      margin-left: 0.5rem;
    }

    /* Better Line Breaks for Long URLs source: https://css-tricks.com/better-line-breaks-for-long-urls/ */
    .link {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      /* These are technically the same, but use both */
      overflow-wrap: break-word;
      word-wrap: break-word;

      word-break: break-word;

      /* Adds a hyphen where the word breaks, if supported (No Blink) */
      hyphens: auto;
    }
  }

  button {
    flex-shrink: 0;
  }
`;

export default SearchResults;

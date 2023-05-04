import styled from 'styled-components';
//context
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './components/context/theme-context';
import { FontContext } from './components/context/font-context';

import { Navigation, Search } from './ExportComponents';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { font } = useContext(FontContext);
  const [fontFamily, setFontFamily] = useState('Lora, serif');

  useEffect(() => {
    if (font === 'Sans Serif') {
      setFontFamily('Inter, sans-serif');
    }
    if (font === 'Serif') {
      setFontFamily('Lora, serif');
    }
    if (font === 'Mono') {
      setFontFamily('Inconsolata, monospace');
    }
  }, [font]);

  return (
    <>
      <StyledApp
        className="app"
        id={theme}
        style={{ fontFamily: `${fontFamily}` }}
      >
        <header className="container">
          <Navigation />
        </header>
        <main className="container">
          <Search />
        </main>
      </StyledApp>
    </>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--clr-background);
  color: var(--clr-text-primary);
  transition: background-color 0.4s, color 0.4s;
`;

export default App;

import { useState } from 'react';
import { createContext } from 'react';

const FontContext = createContext();

const ChangeFont = ({ children }) => {
  const [font, setFont] = useState('Mono');

  const fonts = {
    font,
    setFont,
  };

  return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>;
};

export { FontContext };
export default ChangeFont;

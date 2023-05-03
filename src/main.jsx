import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { StyledGlobal } from './styling/StyledGlobal';
import ThemeProvider from './components/context/theme-context';
import ChangeFont from './components/context/font-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChangeFont>
        <StyledGlobal />
        <App />
      </ChangeFont>
    </ThemeProvider>
  </React.StrictMode>
);

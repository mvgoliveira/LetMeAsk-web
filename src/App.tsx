import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext'
import { ThemeContextProvider } from './contexts/ThemeContext';

import { SwitchContainer } from './SwitchContainer';

function App() { 
    return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <SwitchContainer/>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
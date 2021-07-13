import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext'
import { ThemeContextProvider } from './contexts/ThemeContext';

import { CustomSwitch } from './CustomSwitch';

function App() { 
    return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <CustomSwitch/>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
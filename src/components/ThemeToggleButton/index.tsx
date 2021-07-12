import Switch from 'react-switch';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';

import {} from './styles';

export function ThemeToggleButton() {
  const {isDarkMode, changeTheme} = useTheme();
  
  return (
    <Container>
      <Switch 
        checked={isDarkMode} 
        onChange={changeTheme}
        onColor="#3b3b3b"
        uncheckedIcon={false}
        checkedIcon={false}
        onHandleColor="#3b3b3b"
        offHandleColor="#c7c7c7"
        offColor="#c7c7c7"
        uncheckedHandleIcon={
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
            ☀️
          </div>
        }
        checkedHandleIcon={
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
            🌑
          </div>
        }
      />
    </Container>
  );
}
import { Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from "./pages/Room/index";
import { AdminRoom } from './pages/AdminRoom';
import { Forbidden } from './pages/Forbidden';

import PrivateRoute from './components/PrivateRoute';
import { GlobalStyle } from './styles/global';
import { useTheme } from './hooks/useTheme';

export function SwitchContainer() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/403" exact component={Forbidden}/>
        <Route path="/403" exact component={Forbidden}/>
        <Route path="/rooms/new" component={NewRoom}/>
        <Route path="/rooms/:id" component={Room}/>
        <PrivateRoute path="/admin/rooms/:id" component={AdminRoom}/>
      </Switch>
    </>
  );
}
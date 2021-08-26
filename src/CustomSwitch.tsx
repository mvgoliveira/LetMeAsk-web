import { Route, Switch } from 'react-router-dom';

import { QuestionPage } from './pages/QuestionPage';
import { NewRoom } from "./pages/NewRoom/index";
import { AdminRoom } from './pages/AdminRoom';
import { Forbidden } from './pages/Forbidden';
import { Home } from "./pages/Home/index";
import { Room } from "./pages/Room/index";

import { ThemeToggleButton } from './components/ThemeToggleButton';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { GlobalStyle } from './styles/global';

import { useTheme } from './hooks/useTheme';

export function CustomSwitch() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode}/>
      <ThemeToggleButton/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/403" exact component={Forbidden}/>
        <Route path="/rooms/new" component={NewRoom}/>
        <PublicRoute path="/rooms/:id" exact component={Room}/>
        <PublicRoute path="/rooms/:roomId/:questionId" component={QuestionPage}/>
        <PrivateRoute path="/admin/rooms/:id" component={AdminRoom}/>
      </Switch>
    </>
  );
}
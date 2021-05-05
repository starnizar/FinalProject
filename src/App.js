import LoggedOut from './components/LoggedOut/LoggedOut.jsx'
import Register from './components/Register/Register.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import NameForm from './components/NameForm/NameForm.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Search from './components/HomePage/Search/Search.jsx'
import Chats from './components/HomePage/Chats/Chats.jsx'
import Profile from './components/HomePage/Profile/Profile.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={'/loggedout'}>
            <LoggedOut/>
          </Route>
          <Route path={'/registration'}>
            <Register/>
          </Route>
          <Route path={'/name'}>
            <NameForm/>
          </Route>
          <Route path={'/login'}>
            <LogIn/>
          </Route> 
          <Route path={'/home'}>
            <HomePage/>
          </Route>
          <Route path={'/search'}>
            <Search/>
          </Route>
          <Route path={'/chats'}>
            <Chats/>
          </Route>
          <Route path={'/profile'}>
            <Profile/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import LoggedOut from './components/LoggedOut/LoggedOut.jsx'
import Register from './components/Register/Register.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import NameForm from './components/NameForm/NameForm.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Search from './components/HomePage/Search/Search.jsx'
import Chats from './components/HomePage/Chats/Chats.jsx'
import Profile from './components/HomePage/Profile/Profile.jsx'
import AddPhotoPage from './components/HomePage/AddPhoto/AddPhotoPage.jsx'
import AnotherUser from './components/HomePage/AnotherUser/AnotherUser.jsx'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'
import './App.css';

function App() {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <CookiesProvider>
        <div className="App">
          <Switch>
            <Route exact path={'/'}>
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
            <Route path={'/addphoto'}>
              <AddPhotoPage/>
            </Route>
            <Route path={'/chats'}>
              <Chats/>
            </Route>
            <Route path={'/profile'}>
              <Profile/>
            </Route>
            <Route path={'/anotheruser'}>
              <AnotherUser/>
            </Route>
          </Switch>
        </div>
      </CookiesProvider>
    </HashRouter>
  );
}

export default App;

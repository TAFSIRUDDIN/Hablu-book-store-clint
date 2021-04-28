import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import NoMatch from './components/NoMatch/NoMatch';
import Order from './components/Order/Order';
export const BookContext = createContext();
export const UserContext = createContext();


function App() {
  const [ allBook, setAllBook ] = useState([]);
  useEffect(() => {
    
    // setAllBook(data);
    fetch('https://banana-pudding-50739.herokuapp.com/books')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAllBook(data)
    })
    
  },[]);


  const [user, setUser] = useState({
    
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  })

  return (
  <BookContext.Provider value={[ allBook, setAllBook ]}>
    <UserContext.Provider value={ [user, setUser] }>
    <Container fluid style={{backgroundColor: 'tomato'}}>
      <Router>
        <Header/>
          <Switch>
            <PrivateRoute path="/order">
              <Order/>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:productId">
              <Checkout />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
      </Router>
    </Container>
    </UserContext.Provider>
  </BookContext.Provider>
  );
}

export default App;

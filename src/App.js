import './App.css';
import React, { useReducer } from 'react';
import {Navbar, Nav, NavbarBrand, Container, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// components
import Menu from './components/Menu';
import OrderInfo from './components/OrderInfo';
import ErrorComponent from './components/ErrorComponent';
import Order from './components/Order';
import IngredientPage from './components/IngredientPage';

// reducer and providers
import stateReducer from './reducers/stateReducer';
import {StateContext, DispatchContext} from './providers';

const initialState = {
  order: {
    type: 'Pizza',
    selectedIngredients: []
  },
  ingredients: [
    {name: "mozzarella cheese", category: "cheese", allowed: true},
    {name: "cheddar cheese", category: "cheese", allowed: true},
    {name: "pork cut", category: "meat", allowed: true}, 
    {name: "cooked beef", category: "meat", allowed: true}, 
    {name: "sliced turkey breast", category: "meat", allowed: true},
    {name: "onion", category: "vegtebales", allowed: true},
    {name: "black olives", category: "vegtebales", allowed: true},
    {name: "genoa", category: "salami", allowed: true},
    {name: "picante", category: "salami", allowed: true},
    {name: "ananas", category: "fruit", allowed: true},
    {name: "tangarine", category: "fruit", allowed: true}
  ]
}

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <div className="App">
                <Navbar color="light" light expand="md"> 
                  <Link to="/" className="navbar-brand"> Pizza Maker</Link>
                  <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to="/ingredients" className="nav-link">Ingredients</Link>
                  </NavItem>
                  </Nav>
                </Navbar>

          <Container style={{marginTop: '15px'}}>
              <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/order/pizza" exact component={() => <Order source="../pizzaIcon.png" type="Pizza"/>}/>
                <Route path="/order/calzone" exact component={() => <Order source="../calzoneIcon.png" type="Calzone" />} />
                {/* <Route path="/order/info" exact component={OrderInfo} />*/}
                <Route path="/ingredients" exact component={IngredientPage} />
                <Route path="/" component={ErrorComponent} />
              </Switch>
          </Container>
          </div>
        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;

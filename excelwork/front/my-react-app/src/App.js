import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import {

  Home
} from './pages'


function App() {
  return (
    <>
    <Router>
    <Header />

    <Switch>
      <Route exact path="/"> 
       <Home />
      </Route>

      <Route exact path="/read">
        <h2>Read a file</h2>
      </Route>

      <Route exact path="/parse">
        <h2>Parse</h2>
      </Route>

      
      <Route exact path="/about">
        <h2>About</h2>
      </Route>

      <Route path="*">
            <h2>Error </h2>
      </Route>
    </Switch>
      <Footer />
    </Router>
   
    </>
  );
}

export default App;

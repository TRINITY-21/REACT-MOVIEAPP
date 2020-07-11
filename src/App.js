import React from 'react';
import logo from './logo.svg';
import './App.css';

//Links

import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Components
import Header from './components/App/elements/Header/Header'
import Footer from './components/App/elements/Footer/Footer'
import Home from './components/App/Home/Home'
import Movie from './components/App/Movie/Movie'
import NotFound from './components/App/elements/NotFound/NotFound'



function App() {
  return (
  	<BrowserRouter>
    <React.Fragment>
     <Header />
    	<Switch>
     		<Route exact path='/' component={Home} />
     		<Route exact path='/:movieId' component={Movie} />
     		<Route component={NotFound} />
      </Switch>
      <Footer/>
    </React.Fragment>
  
  	</BrowserRouter>
  	);
}

export default App;

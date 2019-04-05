import React, { Component } from 'react';
import Widget from './Widget';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';

import Widget6 from './Widget6';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Admin from './admin';
import Acceuil from './home';
import Navigation from './nav';


import './App.css';

class App extends Component {
  render() {
    return (

      <div>

        <BrowserRouter>

        
          <div>
            <Navigation />

            <Switch>
              <Route path="/" component={Acceuil} exact />
              <Route path="/admin" component={Admin} exact />
            </Switch>

          </div>



        </BrowserRouter>



      </div>

    );
  }
}

export default App;

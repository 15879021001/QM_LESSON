import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Beer from './Beer'
import Single from './Single'
import './index.css'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Beer}/>
            <Route path='/search/:searchTerm' component={Beer}/>
            <Route path='/beer/:beerId/:beerSlug' component={Single}/>
        </div>
    </Router>
    
    , document.getElementById('root'));


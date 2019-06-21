import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import Post from './Post';
import './sass/custom.sass';
import './sass/screen.sass';

ReactDOM.render(<BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/post/:id" component={Post} />
      </div>
    </BrowserRouter>, 
  document.getElementById('root'));

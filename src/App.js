import React from 'react';
import template from './pug/index.pug';
import data from './data.json';


class App extends React.Component {
  render() {
    return template.call(this, data);
  }
}

export default App;

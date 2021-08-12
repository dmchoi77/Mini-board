import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BoardList from './component/BoardList';
import BoardNew from './component/BoardNew';
import BoardContent from './component/BoardContent';
import Footer from './component/Footer';

import axios from 'axios';

function App() {

  // useEffect(()=>{
  //   axios.get('/api/test')
  //   .then(res=>console.log(res))
  //   .catch()
  // })

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/' component={BoardList} exact />
            <Route path='/BoardNew' component={BoardNew} exact />
            <Route path='/BoardContent/:idx' component={BoardContent} exact />
          </Switch>
        </div>
        <div>
          <Footer>
          </Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;

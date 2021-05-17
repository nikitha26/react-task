import React, {component} from  'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Blog from './Blog.js';
function App() {
  return (
    <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
               <li>
                <Link to="/blog">Blog</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact Us</Link>
              </li>  */}
            </ul>
            <Switch>
              {/* <Route exact path='/' component={Home}></Route> */}
              <Route exact path='/blog' component={Blog}></Route>
              {/* <Route exact path='/contact' component={Contact}></Route> */}
            </Switch>
          </div>
       </Router> 
  );
}

export default App;

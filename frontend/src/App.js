import Login from './components/jsx/login.jsx';
import Home from './components/jsx/home.jsx';

import Scroll from './components/jsx/scroll';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Scroll />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

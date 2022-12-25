
import "./index.css";
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css"
import Home from './components/pages/Home.js';
import Resume from './components/pages/Services.js';
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contact"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

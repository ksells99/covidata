import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";
import UKCases from "./screens/UKCases";
import UKDeaths from "./screens/UKDeaths";

function App() {
  return (
    <div className='font-source-sans'>
      <Navbar />
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/uk/cases' component={UKCases} exact />
        <Route path='/uk/deaths' component={UKDeaths} exact />
      </Switch>
    </div>
  );
}

export default App;

import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";
import Region from "./screens/Region";
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
        <Route path='/region/:id' component={Region} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

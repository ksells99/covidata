import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className='font-source-sans'>
      <Navbar />
      <Switch>
        <Route path='/' component={Dashboard} exact />
      </Switch>
    </div>
  );
}

export default App;

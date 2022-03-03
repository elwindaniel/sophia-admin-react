import "./App.css";
import Header from "./components/menus/Header";
import Auth from "./container/auth";
import Schools from "./container/schools";
import { Switch, Route } from "react-router-dom";

function App() {
  let auth = localStorage.getItem("token");
  return (
    <div>
      {auth ? <Header /> : null}
      <Switch>
        <Route path="/schools" component={Schools} />
        <Route path="/" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;

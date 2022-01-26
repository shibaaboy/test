import Navbar from "./components/Navbar/Navbar";
import style from './App.module.scss'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import { useSelector } from "react-redux";
import CreateNew from "./components/CreateNew/CreateNew";
import Forms from "./components/Forms/Forms";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Navbar/>
        {!isAuth && 
        <Switch>
          <Route path="/login" component={Login}/>
          <Redirect to="/login"/>
        </Switch>
        }
        {isAuth && 
        <Switch>
          <Route path="/main" component={Main}/>
          <Route path="/forms" component={Forms}/>
          <Route path="/create" component={CreateNew}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Redirect to="/main"/>
        </Switch>}
      </div>
    </BrowserRouter>
  );
}

export default App;

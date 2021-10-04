import  React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import { LoginContext } from "./contexts/LoginContext";



import ChatPage from "./pages/Chat/ChatPage";
import LoginPage from "./pages/LoginPage";

function Routes() {


  return (
    
    <HashRouter>
      <Switch>
         (
          <Route path="/chat">
            <ChatPage />
          </Route>
        )  (
          <Route path="/login">
            <LoginPage />
          </Route>
        )
        (
          <Route path="/">
            <LoginPage />
          </Route>
        )
      </Switch>
      </HashRouter>
  );
}
export default Routes;

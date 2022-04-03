import Navi from "./layouts/Navi";
import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <Navi /> 
      <Container className="main">
        <Switch>
          <Dashboard/>
        </Switch>
       
      </Container>
       </div>
    </BrowserRouter>
  );
}

export default App;

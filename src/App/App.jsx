import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainRouter, AdminRouter } from "./index";
import { PageContainer } from "./index";

const App = () => (
  <PageContainer>
    <Router>
      <Switch>
        <Route path="/admin" component={AdminRouter} />
        <Route path="/" component={MainRouter} />
      </Switch>
    </Router>
  </PageContainer>
);

export default App;

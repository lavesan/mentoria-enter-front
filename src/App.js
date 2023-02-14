import { lazy, Suspense, StrictMode } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { PropsAndState } from "./containers/PropsAndState";
import { NotFound } from "./containers/NotFound";

function App() {
  const LazyForm = lazy(() => import("./containers/Form"));

  return (
    <Router>
      <StrictMode>
        <Header />
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <Route exact path="/" component={LazyForm} />
            <Route path="/props-and-state" component={PropsAndState} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </StrictMode>
    </Router>
  );
}

export default App;

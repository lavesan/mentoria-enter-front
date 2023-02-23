import { lazy, Suspense, StrictMode } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { PropsAndState } from "./containers/PropsAndState";
import { NotFound } from "./containers/NotFound";

function App() {
  const LazyForm = lazy(() => import("./containers/Form"));
  const LazyRoutesVariables = lazy(() => import("./containers/RouteVariables"));
  const LazyCustomHook = lazy(() => import("./containers/CustomHook"));

  return (
    <Router>
      <StrictMode>
        <Header />
        <Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <Route exact path="/" component={LazyForm} />
            <Route path="/props-and-state" component={PropsAndState} />
            <Route
              path="/routes-variables/:id"
              component={LazyRoutesVariables}
            />
            <Route path="/custom-hook" component={LazyCustomHook} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </StrictMode>
    </Router>
  );
}

export default App;

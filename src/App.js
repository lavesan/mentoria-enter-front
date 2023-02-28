import { lazy, Suspense, StrictMode, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { PropsAndState } from "./containers/PropsAndState";
import { NotFound } from "./containers/NotFound";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ChakraThemeProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { chakraTheme } from "./chakraTheme";

const LazyForm = lazy(() => import("./containers/Form"));
const LazyRoutesVariables = lazy(() => import("./containers/RouteVariables"));
const LazyCustomHook = lazy(() => import("./containers/CustomHook"));
const LazyStyling = lazy(() => import("./containers/Styling"));

function App() {
  return (
    <Router>
      <StrictMode>
        <ChakraThemeProvider theme={chakraTheme}>
          <ThemeProvider theme={theme}>
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
                <Route path="/styling-page" component={LazyStyling} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </ThemeProvider>
        </ChakraThemeProvider>
      </StrictMode>
    </Router>
  );
}

export default App;

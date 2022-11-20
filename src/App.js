import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Resources from "./views/Resources";



// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Calculators from "./views/Calculators";
import PdfVersion from "./views/PdfVersion";

initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100" >
        <NavBar />

        <Container id="DisplayDiv" className="">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resources" exact component={Resources}/>
            <Route path="/Calculators" component={Calculators} />
            <Route path="/pdfversion" exact component={PdfVersion}/>
          </Switch>
        </Container>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";


import history from "./utils/history";
import Resources from "./views/Resources";



// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import Calculators from "./views/Calculators";
import PdfVersion from "./views/PdfVersion";
import AboutMe from "./views/AboutMe";

initFontAwesome();

const App = () => {
 



  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100" >
        <NavBar />
          <Home/>
        <Container id="DisplayDiv" className="">
          <Switch>
            <Route path="/Transition_Website" exact component={Home} />
            <Route path="/resources" exact component={Resources}/>
            <Route path="/Calculators" component={Calculators} />
            <Route path="/pdfversion" exact component={PdfVersion}/>
            <Route path="/AboutMe" exact component={AboutMe}/>
          </Switch>
        </Container>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;

import 'bootswatch/dist/cosmo/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import { Home } from "./Components/Home";
import { Navigation } from "./Components/Navigation";
import { Reportform } from "./Components/Reportform";
import { Reports } from "./Components/Reports";

function App() {


  return (

    <>

      <Router>

        <Navigation/>

        <div className="container" >

          <Route path="/" exact component={Home} />
          <Route path="/readreports" component={Reports} />
          <Route path="/edit/:id" component={Reportform} />
          <Route path="/formreport" component={Reportform} />

        </div>

      </Router>

    </>

  );

}

export default App;

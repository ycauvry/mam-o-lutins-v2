import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainMenu from "./components/navigation/MainMenu";
import Calendar from "./components/Calendar";
import Listing from "./components/Listing";

function App() {
    return (
        <Router>
            <div className="App">
                <MainMenu/>
                <Switch>
                    <Route exact path="/">
                        <Calendar/>
                    </Route>
                    <Route path="/gestion-assistantes">
                        <Listing/>
                    </Route>
                    <Route path="/gestion-enfants">
                        <Listing/>
                    </Route>
                    <Route path="/gestion-contrats">
                        <Listing/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

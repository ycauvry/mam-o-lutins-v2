import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Listing from "./components/listing/Listing";
import Sidebar from "./components/navigation/Sidebar";
import Calendar from "./components/calendar/Calendar";

function App() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route exact path="/">
                    <Calendar/>
                </Route>
                <Route exact path="/contract">
                    <Listing type="contract"/>
                </Route>
                <Route exact path="/child">
                    <Listing type="child"/>
                </Route>
                <Route exact path="/assistant">
                    <Listing type="assistant"/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

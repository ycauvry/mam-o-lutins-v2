import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainMenu from "./components/navigation/MainMenu";
import Calendar from "./components/calendar/Calendar";
import Listing from "./components/listing/Listing";
import {ListingProvider} from "./context/ListingContext";

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
                        <ListingProvider>
                            <Listing type={'assistant'}/>
                        </ListingProvider>
                    </Route>
                    <Route path="/gestion-enfants">
                        <ListingProvider>
                            <Listing type={'child'}/>
                        </ListingProvider>
                    </Route>
                    <Route path="/gestion-contrats">
                        <ListingProvider>
                            <Listing type={'contract'}/>
                        </ListingProvider>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

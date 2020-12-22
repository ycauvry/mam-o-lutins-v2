import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainMenu from "./components/navigation/MainMenu";
import Calendar from "./components/calendar/Calendar";
import Listing from "./components/listing/Listing";
import {ListingProvider} from "./context/ListingContext";
import Edit from "./components/listing/Edit";

function App() {
    return (
        <Router>
            <div className="App">
                <MainMenu/>
                <Switch>
                    <Route exact path="/">
                        <Calendar/>
                    </Route>
                    <Route exact path="/gestion-assistantes">
                        <ListingProvider>
                            <Listing type={'assistant'}/>
                        </ListingProvider>
                    </Route>
                    <Route path="/gestion-assistantes/:id">
                        <ListingProvider>
                            <Edit/>
                        </ListingProvider>
                    </Route>
                    <Route exact path="/gestion-enfants">
                        <ListingProvider>
                            <Listing type={'child'}/>
                        </ListingProvider>
                    </Route>
                    <Route path="/gestion-enfants/:id">
                        <ListingProvider>
                            <Edit/>
                        </ListingProvider>
                    </Route>
                    <Route exact path="/gestion-contrats">
                        <ListingProvider>
                            <Listing type={'contract'}/>
                        </ListingProvider>
                    </Route>
                    <Route path="/gestion-contrats/:id">
                        <ListingProvider>
                            <Edit/>
                        </ListingProvider>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

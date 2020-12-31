import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainMenu from "./components/navigation/MainMenu";
import Calendar from "./components/calendar/Calendar";
import Listing from "./components/listing/Listing";
import {ListingProvider} from "./context/ListingContext";
import EditData from "./components/datas/EditData";
import AddData from "./components/datas/AddData";

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
                    <Route exact path="/gestion-assistantes/ajouter">
                        <AddData type={'assistant'}/>
                    </Route>
                    <Route path="/gestion-assistantes/:id">
                        <ListingProvider>
                            <EditData/>
                        </ListingProvider>
                    </Route>
                    <Route exact path="/gestion-enfants">
                        <ListingProvider>
                            <Listing type={'child'}/>
                        </ListingProvider>
                    </Route>
                    <Route exact path="/gestion-enfants/ajouter">
                        <AddData type={'child'}/>
                    </Route>
                    <Route path="/gestion-enfants/:id">
                        <ListingProvider>
                            <EditData/>
                        </ListingProvider>
                    </Route>
                    <Route exact path="/gestion-contrats">
                        <ListingProvider>
                            <Listing type={'contract'}/>
                        </ListingProvider>
                    </Route>
                    <Route exact path="/gestion-contrats/ajouter">
                        <AddData type={'contract'}/>
                    </Route>
                    <Route path="/gestion-contrats/:id">
                        <ListingProvider>
                            <EditData/>
                        </ListingProvider>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

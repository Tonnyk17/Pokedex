import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import AppContext from "../context/Appcontext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
    const initialState = useInitialState();


    return(
        <AppContext.Provider value={initialState}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                        <Route exact path="/" component={Home}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;


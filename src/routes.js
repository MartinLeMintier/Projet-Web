import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Admin from "./admin";


export default () => (

    <Switch>

        <Route path ="/admin" exact component = {Admin} />
    </Switch>

);
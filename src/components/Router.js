import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Playerdetail from './Playerdetail';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/player/:playerId" component={Playerdetail}/>
        </Switch>
    </BrowserRouter>
)
export default Router;
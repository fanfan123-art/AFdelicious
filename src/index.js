import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './Login/login';
import {HashRouter as Router , Route , Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";
import HomePage from './Homepage/homePage';


export default class Client extends React.Component{   
    render(){
     
        return(
            <div>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <HomePage path='/homePage' component={HomePage}/> 
                </Switch>
            </Router>
            </div>
        )
    }
}


ReactDOM.render(<Client/>, document.getElementById('root'));
serviceWorker.unregister();

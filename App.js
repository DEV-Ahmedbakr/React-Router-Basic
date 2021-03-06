import React,{Component}       from 'react';                      // React to use render() &  Component
import {BrowserRouter, Route, Switch}  from 'react-router-dom';   // BrowserRouter &  Route & Switch 
import Navbar                  from './component/Navbar';         // Navbar component 
import Home                    from './component/Home';           // Home component 
import Login                   from './component/Login';          // Login component 
import Data                    from './component/Data';           // Data component 
import Notfound                from './component/Notfound';       // Notfound component 
import 'bootstrap/dist/css/bootstrap.min.css';                    // bootstrap  by npm {npm install react-bootstrap bootstrap}
class App extends Component {
 render(){
   return(
     <BrowserRouter>
      <Navbar />
     <Switch>
      <Route exact path="/"         component={Home}/>
      <Route       path="/Login"    component={Login}/>
      <Route       path="/Data"     component={Data}/>
      <Route       path="/:Notfound" component={Notfound}/>
     </Switch>
     </BrowserRouter>
   )
 }

}
export default App;

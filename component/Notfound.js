import React from 'react';
import { Link } from 'react-router-dom';// to use anchors {Link} 

// Stateless Component         
// not use {state} here And use {Arrow function} ex. function_name =()=>{}  instead of  {class} 

const Notfound =() => {
return (
    <div className="container">
    <div className="row text-center">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </Link>
                </div>         
            </div>
        </div>
    </div>
</div>
 )
      }
export default Notfound
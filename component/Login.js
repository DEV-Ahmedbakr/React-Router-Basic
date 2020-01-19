import React ,{Component} from 'react';

//stateful component 
// use {state} here , so using {class}  instead of {Arrow function} ex. function_name =()=>{}   
class Login extends Component {

  state = {
    fname:"",
    lname:""
  }
      
  fNameHandle = (e) => {
     this.setState({
      fname:e.target.value
    })
    } 
  lNameHandle = (e) => {
      this.setState({
        lname:e.target.value
     })
     }  
      
   render(){ 
    const mystyle = {
      margin: "0 auto",
       width:"50%"
    };

      return (
        <div className="container">
          <form action="" style={mystyle}>

            <div className="form-group">
            <label htmlFor="fname">first name:</label>
            <input type="text" className="form-control"  onChange={this.fNameHandle} placeholder="Enter first name" id="fname"/>
            </div>

            <div className="form-group">
            <label htmlFor="lname">last name:</label>
            <input type="text" className="form-control" onChange={this.lNameHandle} placeholder="Enter last name" id="lname"/>
            </div>

            {this.state.fname}  {this.state.lname}
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )   
     }
}
export default Login;
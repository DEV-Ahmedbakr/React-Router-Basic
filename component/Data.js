import React, {Component} from 'react';
import axios from 'axios';
class Data extends Component{


  state = {
  users:[]
  }


  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then( users => {
         this.setState({
             users : users.data
         })
      })
      
  }

  render(){
      return(
        <div className="container">
        <h4>Data from https://jsonplaceholder.typicode.com/users</h4>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Email</th>
                    <th>Website</th>
               
                </tr>
            </thead>
            <tbody>
                   {this.state.users.map(user =>
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                </tr>

                )}
            </tbody>
        </table>
        </div>
      )
  }

}
export default Data
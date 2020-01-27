import React from 'react';
import axios from 'axios'


export default class InputWithIcon extends React.Component {
  state = {
    name:'',
    password:''
  }
  
   onsubmit = (e)=>{
    e.preventDefault();
    const data ={
        first_name:this.state.name,
        password:this.state.password
    }
    axios.post('s/adminRegistration',{data:data})
    .then(data=>{
      if(data.status === 200){
          alert('new admin registred')
          this.props.succsess()
      }
      
    }).catch(err=>{console.log(err);
    })
    
    }
  onchange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
  }
render(){
    return (
        <div id="registerAdmin">
         <div id="regContent">
                <form onSubmit={this.onsubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Admin Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" 
                onChange = {this.onchange} name = "name" placeholder="Enter name"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                  name = "password" onChange = {this.onchange} placeholder="Password"/>
            </div>
           
            <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
         </div>
        </div>
      );
}
  
}

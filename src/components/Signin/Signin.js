import React from 'react'

class Signin extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignin = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
  // onSubmitSignin = (event) => {
  //   event.preventDefault()
  //   fetch('https://quiet-bastion-31102.herokuapp.com/signin', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: this.state.signInEmail,
  //       password: this.state.signInPassword
  //     })
  //   })
    .then(response => response.json())
    .then(user => {
      if (user.id){
        this.props.loadUser(user)
        this.props.onRouteChange('home'); 
      }
    })
  }

  render(){

    const {onRouteChange} = this.props;
    return (
      <article className="br3 ba dark-gray b--black-10 mt5 w-100 w-50-m w-25-l mw6 shadow-5 center bg-blue ">
      <main className="pa4 grey-89 ">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh4 ">SIGN IN</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address" 
                    onChange = {this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" 
                    onChange = {this.onPasswordChange}/>
            </div>
            
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Sign in" 
                  onClick = {this.onSubmitSignin}/>
          </div>
          <div className="lh-copy mt3">
            <p><a onClick = {() => onRouteChange('register')} href="#0" className="f6 link dim black db">Register</a></p>
          
          </div>
        </form>
      </main>
      </article>
)

}


} 




export default Signin
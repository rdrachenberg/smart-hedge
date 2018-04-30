import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> You've logged in successfully.</p>
            <p><strong>You hail from:  {this.props.authData.country}</strong></p>
            <p><strong>Your Telephone # is:  {this.props.authData.phone}</strong></p>
            <p><strong>Your email is:  {this.props.authData.email}</strong></p>
            <p><strong>Here's your pic: {this.props.authData.avatar}</strong></p>
            <p><strong>Public Key: {this.props.authData.publicKey}</strong></p>
            <p><strong>Public Encyption Key: {this.props.authData.publicEncKey}</strong></p>
            <p><strong>Wallet Address: {this.props.authData.address}</strong></p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard

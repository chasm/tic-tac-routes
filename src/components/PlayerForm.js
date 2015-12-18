import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class PlayerForm extends Component {
  render () {
    const { fields: { firstName, lastName, email }, handleSubmit } = this.props

    return (
      <div className="col-sm-4 col-sm-offset-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="First Name" {...firstName}
              className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" {...lastName}
              className="form-control"/>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" {...email}
              className="form-control"/>
          </div>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

PlayerForm = reduxForm({
  form: 'player',
  fields: [ 'firstName', 'lastName', 'email' ],
})(PlayerForm)

export default PlayerForm

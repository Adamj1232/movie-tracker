import React, { Component } from 'react';

export default class CreateUser extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className = 'create-user-controls'>
        <input placeholder='please enter name'/>
        <input placeholder='please enter e-mail'/>
        <input placeholder='please enter password'/>
        <button className = 'login-submit'>Submit</button>
      </section>

    )
  }
}

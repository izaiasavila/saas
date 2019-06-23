import React, { Component } from 'react';

import Button from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Boas vindas</h1>
          <span>E-MAIL</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />
          <span>SENHA</span>
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          <Button size="big" type="submit">Entrar</Button>
        </SignForm>
      </Container>
    );
  }
}

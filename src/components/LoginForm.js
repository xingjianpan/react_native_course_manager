import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Spinner, Button } from './common';
import * as actions from '../actions';

class LoginForm extends Component {

  renderButton() {
    const { loading,
            onButtonPress,
             } = this.props.auth;

    if (loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={ onButtonPress }>
      Login
      </Button>
    );
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  render() {
    const { email,
            password,
            onChangeUserName,
            onChangePassword,
             } = this.props.auth;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={email}
            onChangeText={this.onEmailChange.bind(this)}
          />

        </CardSection>


        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Passwod"
            value={password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = state => {
  return ({
    auth: state.auth,
  });
};

export default connect(mapStateToProps, actions)(LoginForm);

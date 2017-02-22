import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            onChangeText={ onChangeUserName() }
          />

        </CardSection>


        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Passwod"
            value={password}
            onChangeText={ onChangePassword() }
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

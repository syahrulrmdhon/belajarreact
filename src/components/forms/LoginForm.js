import React from 'react';
import {Form, Button, Icon, Input, Label, Segment, Divider, Grid} from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../pesans/InlineError';

class LoginForm extends React.Component {
  state = {
     data: {
       email: '',
       password: ''
     },
     loading: false,
     errors: {}
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  onSubmit = () =>{
    const errors = this.validate(this.state.data);
    this.setState({
      errors
    });
    if(Object.keys(errors).lenght === 0) {
      this.props.submit(this.state.data);
    }
  };
  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = <Label basic color="red" pointing>Email tidak Valid</Label>;
    }
    if (!data.password) {
      errors.password = <Label basic color="red" pointing>Password Salah</Label>;

    }
    return errors;
  }
  render() {
    const{data,errors} = this.state;
    return(
    <Grid.Column style={{ maxWidth: 450 }}>
      <Segment stacked>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label  htmlFor='email'>Email</label>
            <Input
              icon={<Icon name='mail'/>}
              iconPosition='left'
              type='email'
              id='email'
              name='email'
              placeholder='nama@contoh.com'
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email}/>}
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <Input
              icon={<Icon name='unlock alternate'/>}
              iconPosition='left'
              type='password'
              id='password'
              name='password'
              placeholder='password'
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password}/>}
          </Form.Field>
          <Button primary fluid>Login</Button>
        </Form>
      <Divider horizontal>Atau</Divider>
      <Button secondary fluid>Daftar</Button>
    </Segment>
    </Grid.Column>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;

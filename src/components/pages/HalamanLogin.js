import React from 'react';
import LoginForm from '../forms/LoginForm';
import {Grid} from 'semantic-ui-react';

class HalamanLogin extends React.Component {
  submit = data => {
    console.log(data);
  };
  render() {
    return(
      <div className='login-form' style={{ background:'#db2828' }} >
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
          height: 100%;
          }
      `  }</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <LoginForm submit={this.submit} />
        </Grid>
      </div>
   );
  }
}


export default HalamanLogin;

import React from 'react';
import Headernya from '../wrapper/Headernya';
import Footer from '../wrapper/Footer';
import {Segment, Container, Header, Icon, Button,Image} from 'semantic-ui-react';


class Beranda extends React.Component {
  render() {

    return(
      <div>
        <Headernya/>
        <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: 700,
              padding: '1em 0em'
             }}
            vertical
            color="red"
          >
        <Container text>
              <Header
                as='h1'
                content='BelajarReact.com'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='BelajarReact cepat dan tepat'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Ayo Mulai
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        <Footer/>
      </div>
      );
  }
}


export default Beranda;

import React from 'react';
import {Link} from 'react-router-dom';
import {Menu,Input} from 'semantic-ui-react';


class Headernya extends React.Component {
  state = {
    activeItem: 'beranda',
 }
 handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    return(
      <Menu pointing secondary size='large'>
        <Menu.Item name='beranda'
          active={activeItem === 'beranda'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='belajar react'
          active={activeItem === 'belajar react'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
             <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
            <Link to='/login'>Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/signup'>Daftar</Link>
          </Menu.Item>
        </Menu.Menu>
       </Menu>

      );
  }
}

export default Headernya;

import React from 'react';
import {Link} from 'react-router-dom';
import {Menu,Input,Visibility} from 'semantic-ui-react';

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Menu.Item name='beranda'
    />
    <Menu.Item name='belajar react'
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
)

class Headernya extends React.Component {
  state = {
    activeItem: 'beranda',
 }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })
  render() {
    const { activeItem,visible } = this.state;
    return(
      <div>
      { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
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
       </Visibility>
       </div>
      );
  }
}

export default Headernya;

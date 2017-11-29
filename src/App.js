import React from 'react';
import {Route} from 'react-router-dom';
import Beranda from './components/pages/Beranda';
import HalamanLogin from './components/pages/HalamanLogin';

const App = () => <div>
    <Route path='/' exact component={Beranda}/>
    <Route path='/login' exact component={HalamanLogin}/>
</div>

export default App;

import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
   return (
      <div className='enter__page'>
         <h1 style={{ color: '#fff' }}>ВХОД</h1>
         <hr style={{ background: '#fff', width: '25%', margin: '5px 0' }} />
         <Login />
      </div>
   );
}

export default LoginPage;

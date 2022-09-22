import React from 'react';
import Registration from '../components/Registration';

const RegistrationPage = () => {
   return (
      <div className='enter__page'>
         <h1 style={{ color: '#fff' }}>ВХОД</h1>
         <hr style={{ background: '#fff', width: '25%', margin: '5px 0' }} />
         <Registration />
      </div>
   );
}

export default RegistrationPage;

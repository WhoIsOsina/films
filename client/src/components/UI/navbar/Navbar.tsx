import jwt from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext, AuthContext, SearchContext, UserContext } from '../../../context';
import AdminButton from '../button/AdminButton';
import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';
import SearchInput from '../input/SearchInput';

const Navbar = () => {

   const { isAuth, setIsAuth } = useContext(AuthContext)
   const { user, setUser } = useContext(UserContext)
   const { isAdmin, setIsAdmin } = useContext(AdminContext)
   const { query, setQuery } = useContext(SearchContext)
   const [searchQuery, setSearchQuery] = useState('')
   const navigate = useNavigate()

   function logout() {
      localStorage.removeItem('auth')
      localStorage.removeItem('token')
      localStorage.removeItem('isAdmin')
      setIsAuth(false)
      setIsAdmin(false)
      navigate('/')
      //console.log(localStorage);
   }


   return (
      <div className='navbar'>
         <div
            style={{ fontSize: 24, color: '#fff', cursor: 'pointer', marginLeft: 20 }}
            onClick={() => navigate('/films')}
         >
            RT_FILMS
         </div>
         <SearchInput
            type='text'
            value={searchQuery}
            placeholder='Поиск по названию'
            onChange={(e) => {
               setSearchQuery(e.target.value)
               setQuery(e.target.value)
            }}
         />
         <div className='navbar__enter'
            style={{ marginRight: 20 }}
         >
            {isAuth
               ?
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <div style={{ color: "#fff", marginRight: '10px' }}>{user?.email}</div> */}
                  {isAdmin &&
                     <AdminButton onClick={() => navigate('/films/add')}>Добавить</AdminButton>
                  }
                  <MyButton onClick={() => navigate('/users/' + user?.id)}>Мой профиль</MyButton>
                  <MyButton onClick={logout}>выйти</MyButton>
               </div>
               :
               <div>
                  <MyButton onClick={() => navigate('/login')}>Войти</MyButton>
                  <MyButton onClick={() => navigate('/registration')}>Зарегистрироваться</MyButton>
               </div>

            }
         </div>
      </div>
   );
}

export default Navbar;

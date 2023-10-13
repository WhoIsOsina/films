import jwt from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdminContext, AuthContext, SearchContext, UserContext } from '../../../context';
import { setQuery } from '../../../store/queryReducer';
import { RootState } from '../../../store/store';
import { setUser, dropUser } from '../../../store/userReducer';
import { RoleType } from '../../../types/RoleType';
import { UserType } from '../../../types/UserType';
import AdminButton from '../button/AdminButton';
import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';
import SearchInput from '../input/SearchInput';
import Menu from '../menu/Menu';

const Navbar = () => {
   const dispatch = useDispatch()
   const user = useSelector((state: RootState) => state.userReducer.user)
   const [isAuth, setIsAuth] = useState(false)
   //const { user, setUser } = useContext(UserContext)
   const [isAdmin, setIsAdmin] = useState(false)
   const query = useSelector((state: RootState) => state.queryReducer.query)
   const [searchQuery, setSearchQuery] = useState('')
   const navigate = useNavigate()

   function logout() {
      setIsAuth(false)
      setIsAdmin(false)
      dispatch(dropUser())
      localStorage.removeItem('token')
      navigate('/')
      //console.log(localStorage);
   }

   useEffect(() => {
      if (user) {
         setIsAuth(true)
         if (user?.roles.some((role: RoleType) => role.role.includes('ADMIN'))) {
            setIsAdmin(true)
            console.log('ADMIN')
         }
      } else if (localStorage.getItem('token')) {
         const user = jwt(localStorage.token)
         dispatch(setUser(user))
      }
   }, [user])


   return (
      <div className='navbar'>
         <div
            className='rt_films'
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
               dispatch(setQuery(e.target.value))
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
                  <MyButton onClick={logout}>Выйти</MyButton>
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

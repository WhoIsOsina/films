import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdminContext, AuthContext, UserContext } from '../context';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import jwt from 'jwt-decode'
import { RateType } from '../types/RateType';
import { UserType } from '../types/UserType';


const Login = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [isError, setIsError] = useState(false)
   const [textError, setTextError] = useState('')
   const { isAuth, setIsAuth } = useContext(AuthContext)
   const { user, setUser } = useContext(UserContext)
   const { isAdmin, setIsAdmin } = useContext(AdminContext)
   const navigate = useNavigate()
   let location = useLocation()

   //@ts-ignore
   const from = location.state?.from?.pathname || '/';




   async function signIn(e: React.FormEvent) {
      e.preventDefault()
      const dto = { email: login, password }
      const response = await axios.post('http://localhost:5000/auth/login', dto)
         .then((response) => {
            const user: UserType = jwt(response.data.token)
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
            setUser(user)
            localStorage.setItem('token', response.data.token)
            console.log(user.roles);

            if (user.roles.some((role) => role.role.includes('ADMIN'))) {
               localStorage.setItem('isAdmin', 'true')
               setIsAdmin(true)
            }
            navigate(from, { replace: true })
            console.log(user);

         })
         .catch((error) => {
            console.log(error.response.data.message);
            setIsError(true);
            setTextError(error.response.data.message)
         })
         .finally(() => {
            setLogin('')
            setPassword('')
         })
   }



   return (
      <form className='signIn'>
         <MyInput
            placeholder='Введите логин'
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
         />
         <MyInput
            placeholder='Введите пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         {isError &&
            <div style={{ color: 'red' }}>{textError}</div>
         }
         <MyButton onClick={signIn}>Войти</MyButton>
      </form>
   );
}

export default Login;

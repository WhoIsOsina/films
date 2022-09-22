import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [isError, setIsError] = useState(false)
   const [textError, setTextError] = useState('')
   const navigate = useNavigate()

   async function registration(e: React.FormEvent) {
      e.preventDefault()
      const dto = { email: login, password }
      const response = await axios.post('http://localhost:5000/auth/registration', dto)
         .then(() => {
            navigate('/login')
         })
         .catch((error) => {
            setIsError(true)
            setTextError(error.response.data.message)
         })
         .finally(() => {
            setLogin('')
            setPassword('')
         })
   }

   return (
      <div className='enter__page'>
         <h1 style={{ color: '#fff' }}>РЕГИСТРАЦИЯ</h1>
         <hr style={{ background: '#fff', width: '25%', margin: '5px 0' }} />
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
            <MyButton onClick={registration}>Зарегистрироваться</MyButton>
         </form>
      </div>
   );
}

export default Registration;

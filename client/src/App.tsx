import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Navbar from './components/UI/navbar/Navbar';
import jwt from 'jwt-decode'
import { AdminContext, AuthContext, SearchContext, UserContext } from './context';
import FilmIdPage from './pages/FilmIdPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import './styles/App.css'
import { UserType } from './types/UserType';
import UserPage from './pages/UserPage';
import AddFilmPage from './pages/AddFilmPage';


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const user: UserType = jwt(localStorage.token)
      setUser(user)
      setIsAuth(true)
      if (localStorage.getItem('isAdmin')) {
        setIsAdmin(true)
      }
    }
  }, [])

  //console.log(localStorage);


  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <UserContext.Provider value={{ user, setUser }}>
        <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
          <SearchContext.Provider value={{ query, setQuery }}>
            <BrowserRouter>
              <Navbar />
              {isAuth
                ? <Routes>
                  {isAdmin && <Route path='/films/add' element={<AddFilmPage />} />}
                  <Route path='/films' element={<MainPage />} />
                  <Route path='/films/:id' element={<FilmIdPage />} />
                  <Route path='/users/:id' element={<UserPage />} />
                  <Route path='*' element={<Navigate replace to='/films' />} />
                </Routes>
                : <Routes>
                  <Route path='/registration' element={<Registration />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/films' element={<MainPage />} />
                  <Route path='/films/:id' element={<FilmIdPage />} />
                  <Route path='*' element={<Navigate replace to='/films' />} />
                </Routes>
              }
            </BrowserRouter>
          </SearchContext.Provider>
        </AdminContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Navbar from './components/UI/navbar/Navbar';
import jwt from 'jwt-decode'
import { AdminContext, AuthContext, MenuContext, SearchContext, SortContext, UserContext } from './context';
import FilmIdPage from './pages/FilmIdPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import './styles/App.css'
import { UserType } from './types/UserType';
import UserPage from './pages/UserPage';
import AddFilmPage from './pages/AddFilmPage';
import { SortType } from './types/SortType';
//import { Provider } from 'react-redux/es/exports';
import { store } from './store/store';
import { useDispatch, Provider } from 'react-redux';
import { setUser } from './store/userReducer';
import { RoleType } from './types/RoleType';



function App() {

  const sortMechanism: SortType = {
    year: [1900, 2050]
  }

  //const dispatch = useDispatch()
  //const [isAuth, setIsAuth] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [menuIsActive, setMenuIsActive] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)
  const [query, setQuery] = useState('')
  const [sortMech, setSortMech] = useState<SortType>(sortMechanism)

  useEffect(() => {
    console.log(localStorage)
    if (localStorage.getItem('token')) {
      const user: UserType = jwt(localStorage.token)
      setUser(user)
      if (user.roles.some((role: RoleType) => role.role.includes("ADMIN"))) {
        setIsAdmin(true)
      }
    }
  }, [])

  //console.log(localStorage);


  return (
    <Provider store={store}>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <SearchContext.Provider value={{ query, setQuery }}>
          <MenuContext.Provider value={{ menuIsActive, setMenuIsActive }}>
            <SortContext.Provider value={{ sortMech, setSortMech }}>
              <BrowserRouter>
                <Navbar />
                {user
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
            </SortContext.Provider>
          </MenuContext.Provider>
        </SearchContext.Provider>
      </AdminContext.Provider>
    </Provider>
  );
}

export default App;

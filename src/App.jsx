import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './api.js'
import './App.css'

import { UserContext } from './contexts/UserContext.jsx'

import ArticleList from './components/ArticleList.jsx'
import ArticleDetail from './components/ArticleDetail.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import UserDetail from './components/UserDetail.jsx'
import ErrorPage from './components/ErrorPage.jsx'

function App() {
  const [user, setUser] = useState(false)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Navbar/>
      <Routes>
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:articleId' element={<ArticleDetail/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/user/:userId' element={<UserDetail/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App

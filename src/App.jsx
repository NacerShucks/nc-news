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

function App() {
  const [user, setUser] = useState({
    username: 'grumpy19',
    name: 'Paul Grump',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013'
  })

  return (
    <UserContext.Provider value={{user}}>
      <Navbar/>
      <Routes>
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:articleId' element={<ArticleDetail/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/user/:userId' element={<UserDetail/>}/>
      </Routes>
    </UserContext.Provider>
  )
}

export default App

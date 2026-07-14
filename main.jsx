import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext()

export function AuthProvider({children}){
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  useEffect(()=>{
    if(token) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
  },[token])

  const login = async (username,password) => {
    const res = await fetch('/api/login', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({username,password})
    })
    const data = await res.json()
    if(data.token){ setToken(data.token); setUser({username}) }
    return data
  }

  const register = async (username,password) => {
    const res = await fetch('/api/register', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({username,password})
    })
    const data = await res.json()
    if(data.token){ setToken(data.token); setUser({username}) }
    return data
  }

  const logout = ()=>{ setToken(null); setUser(null) }

  return (
    <AuthContext.Provider value={{token,user,login,register,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

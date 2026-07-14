import React, {useState, useContext} from 'react'
import {AuthContext} from './AuthContext'

export default function Login(){
  const {login} = useContext(AuthContext)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [err,setErr] = useState(null)

  async function submit(e){
    e.preventDefault()
    const res = await login(username,password)
    if(res.error) setErr(res.error)
  }

  return (
    <form onSubmit={submit} className="auth-form">
      <h3>Вход</h3>
      {err && <div className="error">{err}</div>}
      <input placeholder="Логин" value={username} onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Пароль" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  )
}

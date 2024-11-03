import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }
  return (
    <div>
      <label>
        Username:{' '}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>
        <button onClick={handleLogin}>Login</button>
      </label>
    </div>
  )
}

export default Login

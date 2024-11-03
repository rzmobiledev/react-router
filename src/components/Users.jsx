import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') == 'active'

  return (
    <div>
      <Link to="1">
        <h2>User 1</h2>
      </Link>
      <Link to="2">
        <h2>User 2</h2>
      </Link>
      <Link to="3">
        <h2>User 3</h2>
      </Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  )
}

export default Users

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Product from './components/Product'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import RequireAuth from './components/RequireAuth'
import UsersDetails from './components/UsersDetails'
import Admin from './components/Admin'
import Login from './components/Login'
import Profile from './components/Profile'
import { AuthProvider } from './components/Auth'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Product />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UsersDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App

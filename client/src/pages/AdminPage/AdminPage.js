import React, { useCallback, useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import config from '../../config.json'
import AdminAuth from '../../components/AdminComponents/AdminAuth/AdminAuth'
import AdminHeader from '../../components/AdminComponents/AdminHeader/AdminHeader'
import AddProductForm from '../../components/AdminComponents/AddProductForm/AddProductForm'


export default function AdminPage() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const [activeNav, setActiveNav] = useState('addProduct')

  const onSubmitAuth = useCallback(async values => {
    const result = await axios.post(`${config.serverUrl}/api/admin/auth`, values)
      .then(res => {
        login(res.data.token, res.data.id)
      })
  }, [])

  return (
    <div>
      {!isAuthenticated && <AdminAuth onSubmit={onSubmitAuth} />}
      {isAuthenticated && <AdminHeader />}
      {isAuthenticated && activeNav === 'addProduct' && <AddProductForm/>}
        
    </div>
  )
}
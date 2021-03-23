import React, { useCallback, useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import config from '../../config.json'
import AdminAuth from '../../components/AdminComponents/AdminAuth/AdminAuth'
import AdminHeader from '../../components/AdminComponents/AdminHeader/AdminHeader'
import AddProductForm from '../../components/AdminComponents/AddProductForm/AddProductForm'
import ProductList from '../../components/AdminComponents/ProductsList/ProductsList'
import { useHistory, useParams } from 'react-router-dom'
import EditProductForm from '../../components/AdminComponents/EditProductForm/EditProductForm'

export default function AdminPage() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const history = useHistory()
  const { nav } = useParams()
  const [activeNav, setActiveNav] = useState('productList')
  const [editProduct, setEditProduct] = useState('')

  // isAuthenticated && history.push('/newProduct')

  const onSubmitAuth = useCallback(async values => {
    const result = await axios.post(`${config.serverUrl}/api/admin/auth`, values)
      .then(res => {
        login(res.data.token, res.data.id)
      })
  }, [])

  return (
    <div>
      {!isAuthenticated && <AdminAuth onSubmit={onSubmitAuth} />}
      {isAuthenticated && <AdminHeader activeNav={nav} />}
      {isAuthenticated && nav === 'newProduct' && <AddProductForm />}
      {isAuthenticated && nav === 'productList' && <ProductList setActiveNav={setActiveNav} setEditProduct={setEditProduct} />}
      {isAuthenticated && nav === 'edit' && <EditProductForm product={editProduct} />}
    </div>
  )
}
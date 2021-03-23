import React, { useEffect, useState } from 'react'
import './ProductsList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/actions/productsAction'
import { getProducts, getPages } from '../../../redux/selectors/productsSelector'
import ListItem from './ListItem/ListItem'
import Pagination from './Pagination/Pagination'
import axios from 'axios'
import config from '../../../config.json'

export default function ProductList({ setActiveNav, setEditProduct }) {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  const pages = useSelector(getPages)

  //pagination
  const [page, setPage] = useState(1)
  const [paginations, setPaginations] = useState([
    { totalPages: pages, currentPage: page }
  ]);
  const updatePaginations = (index, currentPage) => {
    setPaginations(paginations.map((n, i) => i === index ? { ...n, currentPage } : n));
    setPage(currentPage)
  }

  useEffect(() => {
    setPage(1)
    setPaginations([{ totalPages: pages, currentPage: 1 }])
  }, [])

  useEffect(() => {
    dispatch(fetchProducts(page))
  }, [page])

  const handleCheckboxClick = async (_id, currentValue) => {
    const val = currentValue === 'yes' ? 'no' : 'yes'
    await axios.put(`${config.serverUrl}/api/products/view/${_id}`, { view: val }).then((res) => dispatch(fetchProducts(page)))
  }

  const handleDeleteProduct = async (_id) => {
    await axios.delete(`${config.serverUrl}/api/products/${_id}`).then((res) => dispatch(fetchProducts(page)))
  }

  return (
    <div className='productsList'>
      <div className="container">
        <div className='productsList__header'>
          <div className="productsList__headerItem">Фото</div>
          <div className="productsList__headerItem">Заголовок</div>
          <div className="productsList__headerItem">Описание</div>
          <div className="productsList__headerItem">Категория</div>
          <div className="productsList__headerItem">Цена</div>
          <div className="productsList__headerItem">На сайте</div>
        </div>
        {
          products &&
          products.map(product => (
            <ListItem handleCheckboxClick={handleCheckboxClick} handleDeleteProduct={handleDeleteProduct} setActiveNav={setActiveNav} setEditProduct={setEditProduct} key={product._id} product={product} />
          ))
        }
      </div>
      {pages !== null && pages !== 1 && paginations.map((n, i) => (
        <Pagination
          {...n}
          totalPages={pages}
          onChange={page => updatePaginations(i, page)}
        />
      ))}
    </div>
  )
}

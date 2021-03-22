import React from 'react'
import './ListItem.scss'
import config from '../../../../config.json'
import { Link } from 'react-router-dom'

export default function ListItem({product,setActiveNav,setEditProduct}) {

  const handleEditClick = () => {
    setActiveNav('edit')
    setEditProduct(product)
  }

  return (
    <div className='listItem'>
      <img  className='listItem__img listItem__item' src={`${config.serverUrl}/api/images/${product.images[0]}`} alt={product.title}/>
      <div className='listItem__item listItem__item--bold'>{product.title}</div>
      <div className='listItem__item'>{product.description}</div>
      <div className='listItem__item'>{product.category}</div>
      <div className='listItem__item'>{product.price}</div>
      <div className='listItem__item'><input type="checkbox" checked={product.view} name="view" id="view"/></div>
      <div className='listItem__item'><Link to={`/admin/edit/${product._id}`} onClick={() => handleEditClick()} >edit</Link></div>
      <div className='listItem__item'><button>del</button></div>
    </div>
  )
}

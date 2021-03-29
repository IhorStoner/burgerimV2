import React, { useState, useCallback } from 'react'
import './EditProductForm.scss'
import { ReactComponent as CloseIcon } from '../../../assets/svg/btnClose.svg'
import { ReactComponent as AddPhotoIcon } from '../../../assets/svg/addPhotobtn.svg'
import axios from 'axios'
import config from '../../../config.json'

export default function EditProductForm({ product }) {
  const [result, setResult] = useState(product)
  const [images, setImages] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  async function wrap(ev, cb) {
    const btn = ev.target;

    ev.preventDefault();
    btn.setAttribute('disabled', true);

    const formData = getFormData();

    let json;
    try {
      json = await cb(formData);
      console.log(json)
    } catch (err) {
      console.error(err);
    }

    btn.removeAttribute('disabled');
    return json
  }

  function getFormData() {
    const formEl = document.getElementById('exampleForm');
    const formData = new FormData(formEl);

    return formData;
  }

  const onChangeFiles = (files) => {
    setImages(files)
  }

  /// сохранение картинок
  async function submitAxios(ev) {

    return wrap(ev, async (formData) => {

      const { data } = await axios.post(
        `${config.serverUrl}/api/images/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        }
      )

      return data;
    });
  }


  const onSubmit = useCallback(async (ev) => {
    const { _id, ...updateData } = result
    const resultImg = await submitAxios(ev)
    updateData.images = resultImg


    await axios.put(`${config.serverUrl}/api/products/update/${product._id}`, updateData).then(res => {
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 1000)
    }).catch(err => {
      setWarning(true)
      setTimeout(() => setWarning(false), 1000)
    })

  }, [result])


  return (
    <div className="container">
      {isSuccess && <div>Успешно обновлено</div>}
      {warning && <div>Что-то пошло не так</div>}
      <form className='addProduct' method="post" action="/upload" encType="multipart/form-data" id='exampleForm'>
        <div className='addProduct__container'>
          <p className="addProduct__text">
            Фото:
          </p>
          <div className='addProduct__addImg'>
            <label htmlFor="pictures" className="addProduct__labelFile">
              <AddPhotoIcon />
              <input className='addProduct__inputFile' id='pictures' name='pictures' accept="image/*" type="file" onChange={(e) => onChangeFiles(e.target.files)} />
            </label>
            {images.length > 0 && [...images].map((file, i) =>
              <div key={i} className="addProduct__imgContainer">
                <button type='button' className="addProduct__btnDelImg" onClick={() => setImages('')}>
                  <CloseIcon className='addProduct__iconDel' />
                </button>
                <img src={URL.createObjectURL(file)} className='addProduct__imgItem'></img>
              </div>
            )}
            {
              !images && result.images.map((img, i) => (
                <div key={i} className="addProduct__imgContainer">
                  <button type='button' className="addProduct__btnDelImg" onClick={() => setResult({ ...result, images: [] })}>
                    <CloseIcon className='addProduct__iconDel' />
                  </button>
                  <img className='addProduct__imgItem' src={`${config.serverUrl}/api/images/${img}`} alt={product.title} />
                </div>
              ))

            }
          </div>
        </div>
        <div className='addProduct__container'>
          <p>Заголовок:</p>
          <input type="text" value={result.title} onChange={(e) => setResult({ ...result, title: e.target.value })} />
        </div>
        <div className='addProduct__container'>
          <p>Заголовок на украинском:</p>
          <input type="text" value={result.titleUKR} onChange={(e) => setResult({ ...result, titleUKR: e.target.value })} />
        </div>
        <div className='addProduct__container'>
          <p>Описание:</p>
          <textarea className='addProduct__textarea' type="text" value={result.description} onChange={(e) => setResult({ ...result, description: e.target.value })} />
        </div>
        <div className='addProduct__container'>
          <p>Описание на украинском:</p>
          <textarea className='addProduct__textarea' type="text" value={result.descriptionUKR} onChange={(e) => setResult({ ...result, descriptionUKR: e.target.value })}/>
        </div>
        <div className='addProduct__container'>
          <p>Категория:</p>
          <label htmlFor='burgers' className="addProduct__radioContainer">
            <input name='category' checked={result.category === 'burgers'} id='burgers' type="radio" value='burgers' onChange={(e) => setResult({ ...result, category: e.target.value })} />
            <span>Бургеры</span>
          </label>
          <label htmlFor='sandwiches' className="addProduct__radioContainer">
            <input name='category' checked={result.category === 'sandwiches'} id='sandwiches' type="radio" value='sandwiches' onChange={(e) => setResult({ ...result, category: e.target.value })} />
            <span>Сэндвичи</span>
          </label>
          <label htmlFor='garnish' className="addProduct__radioContainer">
            <input name='category' checked={result.category === 'garnish'} id='garnish' value='garnish' type="radio" onChange={(e) => setResult({ ...result, category: e.target.value })} />
            <span>Гарниры</span>
          </label>
          <label htmlFor='drinks' className="addProduct__radioContainer">
            <input name='category' checked={result.category === 'drinks'} id='drinks' value='drinks' type="radio" onChange={(e) => setResult({ ...result, category: e.target.value })} />
            <span>Напитки</span>
          </label>
          <label htmlFor='sales' className="addProduct__radioContainer">
            <input name='category' checked={result.category === 'sales'} id='sales' type="radio" value='sales' onChange={(e) => setResult({ ...result, category: e.target.value })} />
            <span>Акции</span>
          </label>
        </div>
        <div className='addProduct__container'>
          <p>Цена:</p>
          <input type="number" value={result.price} onChange={(e) => setResult({ ...result, price: e.target.value })} />
          <span>грн</span>
        </div>
        <div className='addProduct__container'>
          <p>Отображать:</p>
          <label htmlFor='viewYes' className="addProduct__radioContainer">
            <input name='view' id='viewYes' checked={result.view === 'yes'} value='yes' type="radio" onChange={(e) => setResult({ ...result, view: e.target.value })} />
            <span>Да</span>
          </label>
          <label htmlFor='viewNo' className="addProduct__radioContainer">
            <input name='view' id='viewNo' checked={result.view === 'no'} value='no' type="radio" onChange={(e) => setResult({ ...result, view: e.target.value })} />
            <span>Нет</span>
          </label>
        </div>
        <div><button type='button' className='addProduct__btnSubmit' onClick={(ev) => onSubmit(ev)}>Добавить</button></div>
      </form>
    </div>
  )
}

import React, { useState, useCallback } from 'react'
import './AddProductForm.scss'
import { ReactComponent as CloseIcon } from '../../../assets/svg/btnClose.svg'
import { ReactComponent as AddPhotoIcon } from '../../../assets/svg/addPhotobtn.svg'
import axios from 'axios'
import config from '../../../config.json'

export default function AddProductForm() {
  const [result, setResult] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    view: '',
  })
  const [images, setImages] = useState([])
  const [isSuccess,setIsSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  async function wrap(ev, cb) {
    const btn = ev.target;

    ev.preventDefault();
    btn.setAttribute('disabled', true);

    const formData = getFormData();
    // [...images].map(img => formData.append('pictures', img))
    // console.log(formData)

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
    const resultImg = await submitAxios(ev)
    const finnalyData = result
    finnalyData.images = resultImg
    await axios.post(`${config.serverUrl}/api/products/newProduct`, finnalyData).then(res => {
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false),1000)
    }).catch(err => {
      setWarning(true)
      setTimeout(() => setWarning(false),1000)
    })

  }, [result])

  return (
    <div className="container">
      {isSuccess && <div>Успешно добавлено</div>}
      {warning && <div>Что-то пошло не так</div>}
      <form className='addProduct' method="post" action="/upload" enctype="multipart/form-data" id='exampleForm'>
        <div className='addProduct__container'>
          <p className="addProduct__text">
            Фото:
          </p>
          <div className='addProduct__addImg'>
            <label htmlFor="pictures" className="addProduct__labelFile">
              <AddPhotoIcon />
              <input className='addProduct__inputFile' id='pictures' name='pictures' accept="image/*" type="file" onChange={(e) => onChangeFiles(e.target.files)} />
            </label>
            {[...images].map((file, i) =>
              <div key={i} className="addProduct__imgContainer">
                <button type='button' className="addProduct__btnDelImg" onClick={() => setImages([])}>
                  <CloseIcon className='addProduct__iconDel' />
                </button>
                <img src={URL.createObjectURL(file)} className='addProduct__imgItem'></img>
              </div>
            )}
          </div>
        </div>
        <div className='addProduct__container'>
          <p>Заголовок:</p>
          <input type="text" value={result.title} onChange={(e) => setResult({ ...result, title: e.target.value })} />
        </div>
        <div className='addProduct__container'>
          <p>Описание:</p>
          <input type="text" onChange={(e) => setResult({ ...result, description: e.target.value })}/>
        </div>
        <div className='addProduct__container'>
          <p>Категория:</p>
          <label htmlFor='burgers' className="addProduct__radioContainer">
            <input name='category' id='burgers' type="radio" value='burgers' onChange={(e) => setResult({ ...result, category: e.target.value })}/>
            <span>Бургеры</span>
          </label>
          <label htmlFor='sandwiches' className="addProduct__radioContainer">
            <input name='category' id='sandwiches' type="radio" value='sandwiches' onChange={(e) => setResult({ ...result, category: e.target.value })}/>
            <span>Сэндвичи</span>
          </label>
          <label htmlFor='garnish' className="addProduct__radioContainer">
            <input name='category' id='garnish' value='garnish' type="radio" onChange={(e) => setResult({ ...result, category: e.target.value })}/>
            <span>Гарниры</span>
          </label>
          <label htmlFor='drinks' className="addProduct__radioContainer">
            <input name='category' id='drinks' value='drinks' type="radio" onChange={(e) => setResult({ ...result, category: e.target.value })}/>
            <span>Напитки</span>
          </label>
          <label htmlFor='sales' className="addProduct__radioContainer">
            <input name='category' id='sales' type="radio" value='sales' onChange={(e) => setResult({ ...result, category: e.target.value })}/>
            <span>Акции</span>
          </label>
        </div>
        <div className='addProduct__container'>
          <p>Цена:</p>
          <input type="number" onChange={(e) => setResult({ ...result, price: e.target.value })}/>
          <span>грн</span>
        </div>
        <div className='addProduct__container'>
          <p>Отображать:</p>
          <label htmlFor='viewYes' className="addProduct__radioContainer">
            <input name='view' id='viewYes' value='yes' type="radio" onChange={(e) => setResult({ ...result, view: e.target.value })}/>
            <span>Да</span>
          </label>
          <label htmlFor='viewNo' className="addProduct__radioContainer">
            <input name='view' id='viewNo' value='no' type="radio" onChange={(e) => setResult({ ...result, view: e.target.value })}/>
            <span>Нет</span>
          </label>
        </div>
        <div><button type='button' className='addProduct__btnSubmit' onClick={(ev) => onSubmit(ev)}>Добавить</button></div>
      </form>
    </div>
  )
}

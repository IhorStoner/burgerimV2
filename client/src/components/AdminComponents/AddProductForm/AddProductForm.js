import React, { useState, useCallback } from 'react'
import './AddProductForm.scss'
// import { ReactComponent as CloseIcon } from '../../../assets/svg/btnClose.svg'
// import { ReactComponent as AddPhotoIcon } from '../../../assets/svg/addPhotobtn.svg'
import axios from 'axios'
import config from '../../../config.json'

export default function AddProductForm() {
  const [result, setResult] = useState({

  })
  const [images, setImages] = useState([])


  async function wrap(ev, cb) {
    const btn = ev.target;

    ev.preventDefault();
    btn.setAttribute('disabled', true);

    const formData = getFormData();
    console.log(formData)
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
    const formData = new FormData();
    formData.append('pictures', [...images])

    return formData;
  }

  const onChangeFiles = (files) => {
    setImages(files)
  }

  /// сохранение картинок
  async function submitAxios(ev) {

    return wrap(ev, async (formData) => {

      const { data } = await axios.post(
        `${config.serverUrl}/api/images`,
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
    // let finnalyData = form
    // finnalyData.images = resultImg

    // const adId = await axios.post(`${config.serverUrl}/api/pictures`, finnalyData)

  }, [result])

  return (
    <div className="container">
      <form className='addProduct'>
        <div className='addProduct__container'>
          <p className="addProduct__text">
            Фото:
          </p>
          <div className='addProduct__addImg'>
            <label htmlFor="files" className="addProduct__labelFile">
              {/* <AddPhotoIcon /> */}
              <input className='addProduct__inputFile' id='files' name='files' type="file" multiple onChange={(e) => onChangeFiles(e.target.files)} />
            </label>
            {[...images].map((file, i) =>
              <div key={i} className="addProduct__imgContainer">
                <button type='button' className="addProduct__btnDelImg" onClick={() => setImages([])}>
                  {/* <CloseIcon /> */}
                </button>
                <img src={URL.createObjectURL(file)} className='addProduct__imgItem'></img>
              </div>
            )}
          </div>
        </div>
        <div className='addProduct__container'>
          <p>Заголовок:</p>
          <input type="text" />
        </div>
        <div className='addProduct__container'>
          <p>Описание:</p>
          <input type="text" />
        </div>
        <div className='addProduct__container'>
          <p>Категория:</p>
          <label htmlFor='burgers' className="addProduct__radioContainer">
            <input name='category' id='burgers' type="radio" />
            <span>Бургеры</span>
          </label>
          <label htmlFor='sandwiches' className="addProduct__radioContainer">
            <input name='category' id='sandwiches' type="radio" />
            <span>Сэндвичи</span>
          </label>
          <label htmlFor='garnish' className="addProduct__radioContainer">
            <input name='category' id='garnish' type="radio" />
            <span>Гарниры</span>
          </label>
          <label htmlFor='drinks' className="addProduct__radioContainer">
            <input name='category' id='drinks' type="radio" />
            <span>Напитки</span>
          </label>
          <label htmlFor='sales' className="addProduct__radioContainer">
            <input name='category' id='sales' type="radio" />
            <span>Акции</span>
          </label>
        </div>
        <div className='addProduct__container'>
          <p>Цена:</p>
          <input type="text" />
          <span>грн</span>
        </div>
        <div className='addProduct__container'>
          <p>Отображать:</p>
          <label htmlFor='viewYes' className="addProduct__radioContainer">
            <input name='view' id='viewYes' value='yes' type="radio" />
            <span>Да</span>
          </label>
          <label htmlFor='viewNo' className="addProduct__radioContainer">
            <input name='view' id='viewNo' value='no' type="radio" />
            <span>Нет</span>
          </label>
        </div>
        <div><button type='button' className='addProduct__btnSubmit' onClick={(ev) => onSubmit(ev)}>Добавить</button></div>
      </form>
    </div>
  )
}

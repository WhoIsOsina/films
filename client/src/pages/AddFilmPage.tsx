import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const AddFilmPage = () => {
   const [title, setTitle] = useState('')
   const [director, setDirector] = useState('')
   const [year, setYear] = useState('')
   const [genre, setGenre] = useState('')
   const [activeStep, setActiveStep] = useState(0)
   const [image, setImage] = useState<File>()
   const [trailer, setTrailer] = useState<File>()
   const navigate = useNavigate()

   function next() {
      if (activeStep !== 2) {
         console.log('next');

         setActiveStep(prev => prev + 1)
      } else {
         const formData = new FormData()
         formData.append('name', title)
         formData.append('year', year)
         formData.append('genre', genre)
         formData.append('director', director)
         if (image && trailer) {
            formData.append('picture', image)
            formData.append('video', trailer)
            axios.post('http://localhost:5000/films', formData)
               .then(() => {
                  navigate('films')
               })
               .catch((e) => {
                  console.log(e);
               })
         }
      }
   }

   function back() {
      console.log('back');

      setActiveStep(prev => prev - 1)
   }


   return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <h1 style={{ color: '#fff' }}>ДОБАВИТЬ ФИЛЬМ</h1>
         <div className='add_film_steps'>
            {[1, 2, 3].map((step) =>
               <div key={step} className={step === activeStep + 1 ? 'steps_item active' : 'steps_item'}>{step}</div>
            )}
         </div>
         <div className='add_film_content'>
            {activeStep === 0 &&
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <MyInput
                     type='text'
                     placeholder='Название'
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
                  <MyInput
                     type='text'
                     placeholder='Режиссер'
                     value={director}
                     onChange={(e) => setDirector(e.target.value)}
                  />
                  <MyInput
                     type='text'
                     placeholder='Год производства'
                     value={year}
                     onChange={(e) => setYear(e.target.value)}
                  />
                  <MyInput
                     type='text'
                     placeholder='Жанры'
                     value={genre}
                     onChange={(e) => setGenre(e.target.value)}
                  />
               </div>
            }

            {activeStep === 1 &&
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h2 style={{ color: '#fff', marginBottom: '10px' }}>Загрузите обложку фильма</h2>
                  <div className="input__wrapper">
                     <input name="file" type="file" id="input__file" className="input input__file" multiple onChange={(e) => setImage(e.target.files![0])} />
                     <label htmlFor="input__file" className="input__file-button" >
                        {/* <span className="input__file-icon-wrapper"><img className="input__file-icon" src="./img/add.svg" alt="Выбрать файл" width="25" /></span> */}
                        <span className="input__file-button-text">Выберите файл</span>
                     </label>
                  </div>
               </div>
            }

            {activeStep === 2 &&
               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h2 style={{ color: '#fff', marginBottom: '10px' }}>Загрузите трейлер</h2>
                  <div className="input__wrapper">
                     <input name="file" type="file" id="input__file" className="input input__file" multiple onChange={(e) => setTrailer(e.target.files![0])} />
                     <label htmlFor="input__file" className="input__file-button" >
                        {/* <span className="input__file-icon-wrapper"><img className="input__file-icon" src="./img/add.svg" alt="Выбрать файл" width="25" /></span> */}
                        <span className="input__file-button-text">Выберите файл</span>
                     </label>
                  </div>
               </div>
            }

            <div className='button_wrapper' style={{ display: 'flex', justifyContent: 'space-between' }}>
               <MyButton onClick={back} disabled={activeStep === 0}>Назад</MyButton>
               {activeStep === 2
                  ? <MyButton onClick={next}>Отправить</MyButton>
                  : <MyButton onClick={next}>Далее</MyButton>

               }
            </div>
         </div>
      </div>
   );
}

export default AddFilmPage;

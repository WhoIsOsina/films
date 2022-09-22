import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommentItem from '../components/CommentItem';
import CommentList from '../components/CommentList';
import Rating from '../components/Rating';
import MyButton from '../components/UI/button/MyButton';
import CommentInput from '../components/UI/input/CommentInput';
import MyRating from '../components/UI/rating/MyRating';
import { AuthContext, UserContext } from '../context';
import { CommentType } from '../types/CommentType';
import { FilmType } from '../types/FilmType';
import { RateType } from '../types/RateType';

const FilmIdPage = () => {
   const { user, setUser } = useContext(UserContext)
   const [comments, setComments] = useState<CommentType[]>()
   const [userComment, setUserComment] = useState('')
   let location = useLocation()
   const params = useParams()
   const [film, setFilm] = useState<FilmType | null>(null)



   const fetchFilmById = async () => {
      const response = await axios.get<FilmType>('http://localhost:5000/films/' + params.id)
      setFilm(response.data)
   }



   useEffect(() => {
      fetchFilmById()
   }, [])


   return (
      <div className='film__page'>
         <div className='background__film'>
            <video className='background__film__page' src={`http://localhost:5000/${film?.video}`} loop={true} autoPlay={true} muted={true}></video>
            <div className='black'></div>
         </div>
         <div className='film__page_descr' style={{ zIndex: '4' }}>
            <h1 className='film__page_title'> {film?.name}</h1>
            <div className='film__page_info'>
               <div className='film__page_picture'>
                  <img style={{ height: '35vw' }} src={`http://localhost:5000/${film?.picture}`} />
               </div>
               <div>
                  <div>ГОД ВЫПУСКА: {film?.year}</div>
                  <div>РЕЖИССЕР: {film?.director}</div>
                  <div>ЖАНР: {film?.genre}</div>
                  <hr style={{ margin: '10px 0', width: '100%' }} />
                  <div>трейлер</div>
                  <video className='film__page__trailer' src={`http://localhost:5000/${film?.video}`} controls={true} ></video>
                  {film && <Rating filmId={film.id} user={user} />}
               </div>
            </div>
         </div>
         <hr style={{ margin: '20px 0', width: '90vw', zIndex: 4 }} />
         <div className='film__page__comments'>
            {/* <div className='film__page__add_comment'>
               <div>Оставьте комментарий</div>
               <form style={{ marginLeft: '-10px' }}>
                  <CommentInput onChange={(e) => setUserComment(e.target.value)} placeholder='Введите текст комментария' value={userComment} />
                  <MyButton onClick={sendComment}>Отправить</MyButton>
               </form>
            </div>
            <div>COMMENTS</div> */}
            <CommentList filmId={Number(params.id)} />
         </div>
      </div >
   );
}

export default FilmIdPage;

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CommentItem from '../components/CommentItem';
import CommentList from '../components/CommentList';
import Rating from '../components/Rating';
import MyButton from '../components/UI/button/MyButton';
import CommentInput from '../components/UI/input/CommentInput';
import Loader from '../components/UI/loader/Loader';
import MyRating from '../components/UI/rating/MyRating';
import { AuthContext, UserContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { RootState } from '../store/store';
import { CommentType } from '../types/CommentType';
import { FilmType } from '../types/FilmType';
import { RateType } from '../types/RateType';

const FilmIdPage = () => {
   const user = useSelector((state: RootState) => state.userReducer.user)
   const [comments, setComments] = useState<CommentType[]>()
   const [userComment, setUserComment] = useState('')
   const [genres, setGenres] = useState<string>()

   let location = useLocation()
   const params = useParams()
   const [film, setFilm] = useState<FilmType | null>(null)
   const [fetchFilmById, isLoading, error] = useFetching(async () => {
      const response = await axios.get<FilmType>('http://localhost:5000/films/' + params.id)
         .then((response) => {
            setFilm(response.data)
            joinGenres(response.data)
         })
   })

   const joinGenres = (film: FilmType) => {
      const genre: string[] = []
      film?.genres.map(g => {
         genre.push(g.genre)
      })
      setGenres(genre.join(', '))
      console.log(genres)
   }



   useEffect(() => {
      fetchFilmById()
   }, [])


   return (
      <div>
         {isLoading
            ?
            <Loader />
            :
            <div>
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
                           <div>ЖАНР: {genres}</div>
                           <hr style={{ margin: '10px 0', width: '100%' }} />
                           <div>трейлер</div>
                           <video className='film__page__trailer' src={`http://localhost:5000/${film?.video}`} controls={true} ></video>
                           {film && <Rating filmId={film.id} user={user} />}
                        </div>
                     </div>
                  </div>
                  {/* <hr style={{ margin: '20px 0', width: '90vw', zIndex: 4 }} /> */}
                  <div className='film__page__comments' style={{ marginTop: '40px' }}>
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
            </div>
         }
      </div>
   );
}

export default FilmIdPage;

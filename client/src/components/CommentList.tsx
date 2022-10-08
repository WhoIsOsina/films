import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, UserContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { CommentType } from '../types/CommentType';
import { UserType } from '../types/UserType';
import CommentItem from './CommentItem';
import MyButton from './UI/button/MyButton';
import CommentInput from './UI/input/CommentInput';
import Loader from './UI/loader/Loader';

interface CommentListProps {
   filmId: number;
}


const CommentList: FC<CommentListProps> = ({ filmId }) => {

   const { isAuth, setIsAuth } = useContext(AuthContext)
   const { user, setUser } = useContext(UserContext)
   const [comments, setComments] = useState<CommentType[]>()
   const [userComment, setUserComment] = useState('')
   const location = useLocation()
   const navigate = useNavigate()
   const [fetchComments, isLoading, error] = useFetching(async () => {
      const response = (await axios.get<CommentType[]>('http://localhost:5000/comments/films/' + filmId))
      setComments(response.data)
   })


   const sendComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (user) {
         const dto: CommentType = { content: userComment, filmId: Number(filmId), userId: user?.id }
         await axios.post('http://localhost:5000/comments', dto)
         setUserComment('')
         fetchComments()
      }

   }

   useEffect(() => {
      fetchComments()

   }, [setComments])

   return (
      <div className='film__page__comments'>
         <div className='film__page__add_comment'>
            {isAuth
               ? <div>
                  <div style={{ margin: '0px 0px 10px -10px' }}>Оставьте комментарий</div>
                  <form style={{ marginLeft: '-10px' }}>
                     <CommentInput onChange={(e) => setUserComment(e.target.value)} placeholder='Введите текст комментария' value={userComment} />
                     <MyButton onClick={sendComment}>Отправить</MyButton>
                  </form>
               </div>
               : <div style={{ textAlign: 'center', textTransform: 'none', fontWeight: '200' }}>
                  <span
                     style={{ textDecoration: 'underLine', cursor: 'pointer', color: 'rgb(70, 124, 241)' }}
                     onClick={() => navigate('/login', { state: { from: location } })}
                  >
                     Войдите
                  </span>, чтобы оставить комментарий</div>
            }
         </div>
         <div>КОММЕНТАРИИ</div>
         {isLoading
            ?
            <Loader />
            :
            <div>
               {comments?.length
                  ? comments.map((comment: CommentType) =>
                     <CommentItem key={comment.id} comment={comment} onDelete={fetchComments} />
                  )
                  :
                  <div style={{ fontSize: '24px', marginTop: '15px' }}>Комментарии не найдены</div>
               }
            </div>
         }
      </div>
   );
}

export default CommentList;

import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import { AdminContext, UserContext } from '../context';
import { CommentType } from '../types/CommentType';
import Update from './UI/update/Update';
import Delete from './UI/delete/Delete';
import Dislike from './UI/dislike/Dislike';
import Like from './UI/like/Like';


interface CommentProps {
   comment: CommentType;
   onDelete: () => void;
   setIsChanging: (value: boolean) => void
   setUserComment: (value: string) => void
   setUpdatingComment: (value: CommentType) => void
}

const CommentItem: FC<CommentProps> = ({ comment, onDelete, setIsChanging, setUpdatingComment, setUserComment }) => {
   const { user, setUser } = useContext(UserContext)
   const [commentState, setCommentState] = useState(comment)
   const { isAdmin, setIsAdmin } = useContext(AdminContext)

   async function like() {
      const dto = { userId: user?.id }
      const likes = await axios.put("http://localhost:5000/comments/like/" + comment.id, dto)
         .then((response) => {
            setCommentState(response.data)
         })
         .catch((e) => {
            alert(e.response.data.message)
         })
   }
   async function dislike() {
      const dto = { userId: user?.id }
      const dislikes = await axios.put("http://localhost:5000/comments/dislike/" + comment.id, dto)
         .then((response) => {
            setCommentState(response.data)
         })
         .catch((e) => {
            alert(e.response.data.message)
         })
   }

   async function fetchComment() {
      const response = await axios.get("http://localhost:5000/comments/" + comment.id)
      setCommentState(response.data)

   }

   async function deleteComment() {
      const response = await axios.delete("http://localhost:5000/comments/" + comment.id)
      onDelete()
   }

   async function updateComment() {
      setIsChanging(true)
      setUpdatingComment(comment)
      setUserComment(comment.content)
   }


   useEffect(() => {
      fetchComment()
   }, [setCommentState])
   return (
      <div>
         <div className='comment__block'>
            <div className='comment__block_header'>
               <div className='comment__block_user'>{comment.user?.email}</div>
               {comment.updated && <div style={{ color: 'lightgray', marginLeft: '5px' }}>изменено</div>}
            </div>
            <div className='comment__block_content'>{comment.content}</div>
            <div className='comment__block_rating'>
               <Like onClick={like}>{commentState.likes}</Like>
               <Dislike onClick={dislike}>{commentState.dislikes}</Dislike>
            </div>
            <div className='comment__block_action'>
               {comment.userId === user?.id && <Update onClick={updateComment} />}
               {isAdmin && <Delete onClick={deleteComment} />}
            </div>
         </div>
      </div>
   );
}

export default CommentItem;

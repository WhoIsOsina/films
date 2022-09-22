import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import { UserContext } from '../context';
import { CommentType } from '../types/CommentType';
import { UserType } from '../types/UserType';
import Dislike from './UI/dislike/Dislike';
import Like from './UI/like/Like';


interface CommentProps {
   comment: CommentType;
}

const CommentItem: FC<CommentProps> = ({ comment }) => {
   const { user, setUser } = useContext(UserContext)
   const [commentState, setCommentState] = useState(comment)

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


   useEffect(() => {
      fetchComment()
   }, [setCommentState])
   return (
      <div>
         <div className='comment__block'>
            <div className='comment__block_user'>{comment.user?.email}</div>
            <div className='comment__block_content'>{comment.content}</div>
            <div className='comment__block_rating'>
               <Like onClick={like}>{commentState.likes}</Like>
               <Dislike onClick={dislike}>{commentState.dislikes}</Dislike>
            </div>
         </div>
      </div>
   );
}

export default CommentItem;

import React, { FC, TextareaHTMLAttributes } from 'react';
import classes from './CommentInput.module.css'

interface CommentInputProps {
   value: string;
   placeholder: string;
   onChange: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const CommentInput: FC<CommentInputProps> = ({ onChange, placeholder, value }) => {
   return (
      <textarea
         value={value}
         onChange={onChange}
         className={classes.commentInput}
         placeholder={placeholder}
      />
   );
}

export default CommentInput;

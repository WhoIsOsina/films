import React, { FC } from 'react';
import classes from './Update.module.css'

interface UpdateCommentProps {
   onClick: () => void
}

const update: FC<UpdateCommentProps> = ({ onClick }) => {
   return (
      <div className={classes.update} onClick={onClick}>
         <h1 style={{ color: '#fff', fontSize: '24px' }}>Р</h1>
      </div>
   );
}

export default update;

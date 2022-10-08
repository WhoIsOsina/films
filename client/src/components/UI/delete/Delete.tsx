import React, { FC } from 'react';
import classes from './Delete.module.css'

interface DeleteProps {
   onClick: () => void
}

const Delete: FC<DeleteProps> = ({ onClick }) => {

   const first = [classes.cross, classes.first].join(' ')
   const second = [classes.cross, classes.second].join(' ')


   return (
      <div className={classes.delete} onClick={onClick}>
         <span className={first}></span>
         <span className={second}></span>
      </div>
   );
}

export default Delete;

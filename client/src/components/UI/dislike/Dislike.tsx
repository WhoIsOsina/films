import React, { FC, PropsWithChildren } from 'react';
import classes from './Dislike.module.css'

interface DislikeProps {
   onClick: () => void;
}

const Dislike: FC<PropsWithChildren<DislikeProps>> = ({ children, onClick }) => {
   return (
      <div style={{ display: 'flex', alignItems: 'center' }} onClick={onClick}>
         <div className={classes.myDislikeIcon}></div>
         <div className={classes.myDislikeText}>{children}</div>
      </div>
   );
}

export default Dislike;

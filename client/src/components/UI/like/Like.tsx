import React, { FC, PropsWithChildren } from 'react';
import classes from './Like.module.css'

interface ILikeProps {
   onClick: () => void;
}

const Like: FC<PropsWithChildren<ILikeProps>> = ({ children, onClick }) => {
   return (
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}>
         <div className={classes.myLikeIcon} onClick={onClick}></div>
         <div className={classes.myLikeText}> {children}</div>
      </div>
   );
}

export default Like;

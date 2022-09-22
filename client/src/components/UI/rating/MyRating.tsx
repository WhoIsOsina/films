import axios from 'axios';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren, useContext } from 'react';
import { UserContext } from '../../../context';
import { RateType } from '../../../types/RateType';
import classes from './MyRating.module.css'

interface RatingProps {
   onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const MyRating: FC<PropsWithChildren<RatingProps>> = ({ children, onClick }) => {
   const { user, setUser } = useContext(UserContext)


   return (
      <div className={classes.myRating} onClick={onClick}>
         {children}
      </div>
   );
}

export default MyRating;

import React, { FC, PropsWithChildren } from 'react';
import classes from './MyButton.module.css'

interface MyButtonProps {
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
   disabled?: boolean
}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({ children, onClick, disabled }) => {

   let finalClass

   if (disabled) {
      finalClass = classes.myButton + ' ' + classes.disabled
   } else {
      finalClass = classes.myButton
   }

   return (
      <button
         className={finalClass}
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export default MyButton;

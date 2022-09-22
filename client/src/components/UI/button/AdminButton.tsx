import React, { FC, PropsWithChildren } from 'react';
import classes from './AdminButton.module.css'

interface AdminButtonnProps {
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AdminButton: FC<PropsWithChildren<AdminButtonnProps>> = ({ children, onClick }) => {
   return (
      <button
         className={classes.adminButton}
         onClick={onClick}
      >
         {children}
      </button>
   );
}

export default AdminButton;

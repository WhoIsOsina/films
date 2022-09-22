import React, { FC } from 'react';
import classes from './MyInput.module.css'

interface MyInputProps {
   value: string;
   type: string;
   placeholder: string;
   onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ value, onChange, placeholder, type }) => {
   return (
      <input
         className={classes.myInput}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
   );
}

export default MyInput;

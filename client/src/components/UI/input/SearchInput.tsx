import React, { FC } from 'react';
import classes from './SearchInput.module.css'

interface MyInputProps {
   value: string;
   type: string;
   placeholder: string;
   onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<MyInputProps> = ({ value, onChange, placeholder, type }) => {
   return (
      <input
         className={classes.searchInput}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
   );
}

export default SearchInput;

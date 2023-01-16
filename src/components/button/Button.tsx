import { FC } from 'react';

import { ButtonProps } from './Button.props';

import styles from './Button.module.css';

const Button: FC<ButtonProps>  = ({ children, className = '', ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;

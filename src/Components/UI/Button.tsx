import React from 'react';

import styles from '../Styles/Button.module.css';

interface Props {
  onClick?: () => void;
  title: string;
  className?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;

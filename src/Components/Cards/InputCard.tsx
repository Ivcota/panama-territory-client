import React from 'react';

import styles from '../Styles/InputCard.module.css';

interface Props {
  className?: string;
}

const InputCard: React.FC<Props> = (props) => {
  return (
    <div className={`${props.className} ${styles.inputCard}`}>
      {props.children}
    </div>
  );
};

export default InputCard;

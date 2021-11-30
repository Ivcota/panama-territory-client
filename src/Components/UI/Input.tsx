import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Styles/Input.module.css';

interface Props {
  type: string;
  icon: any;
  name: string;
  placeholder: string;
  autoComplete: string;
  required: boolean;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className={styles.input}>
      <FontAwesomeIcon className={styles.icon} icon={props.icon} />
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        required={props.required}
      />
    </div>
  );
};

export default Input;
